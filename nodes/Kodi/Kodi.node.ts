import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type IDataObject,
	type INodeTypeDescription,
        NodeConnectionType,
} from 'n8n-workflow';
import fetch from 'node-fetch';
//import * as KodiTypes from './kodi';

export class Kodi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Kodi',
		name: 'Kodi',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Control Kodi',
		icon: 'file:Kodi.png',
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		defaults: {
			name: 'Kodi',
		},
		credentials: [
			{
				name: 'kodiApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				options: [
					{
						name: 'Update/Scan',
						value: 'Scan',
						description: 'Update/Scan library',
						action: 'Update / scan library',
					},
					{
						name: 'Clean',
						value: 'Clean',
						description: 'Clean library',
						action: 'Clean library',
					},
					{
						name: 'Get',
						value: 'Get',
						description: 'Get data from Kodi',
						action: 'Get data from kodi',
					},
					{
						name: 'Raw',
						value: 'Raw',
						description: 'Provide raw JSON-RPC',
						action: 'Call raw JSON-RPC',
					},
				],
				default: 'Scan',
				noDataExpression: true,
			},
			{
				displayName: 'Library',
				name: 'library',
				type: 'options',
				displayOptions: {
					show: {
						operation: ['Scan', 'Clean', 'Get'],
					},
				},
				options: [
					{
						name: 'Video',
						value: 'VideoLibrary',
						description: 'Video library',
						action: 'Video library',
					},
					{
						name: 'Audio',
						value: 'AudioLibrary',
						description: 'Audio library',
						action: 'Audio library',
					},
				],
				default: 'VideoLibrary',
				noDataExpression: true,
			},
			{
				displayName: 'Get Type',
				name: 'type',
				type: 'options',
				displayOptions: {
					show: {
						operation: ['Get'],
					},
				},
				options: [
					{
						name: 'Albums',
						value: 'GetAlbums',
						description: 'Get albums (Audio only)',
						action: 'Get albums (Audio only)',
					},
					{
						name: 'Artists',
						value: 'GetArtists',
						description: 'Get artists (Audio only)',
						action: 'Get artists (Audio only)',
					},
					{
						name: 'Movies',
						value: 'GetMovies',
						description: 'Get movies (Video only)',
						action: 'Get movies (Video only)',
					},
					{
						name: 'Music Videos',
						value: 'GetMusicVideos',
						description: 'Get music videos (Video only)',
						action: 'Get music videos (Video only)',
					},
					{
						name: 'Songs',
						value: 'GetSongs',
						description: 'Get songs (Audio only)',
						action: 'Get songs (Audio only)',
					},
					{
						name: 'TV Shows',
						value: 'GetTVShows',
						description: 'Get TV shows (Video only)',
						action: 'Get TV shows (Video only)',
					},
				],
				default: 'GetMovies',
				noDataExpression: true,
			},
			{
				displayName: 'Raw JSON',
				name: 'payload',
				displayOptions: {
					show: {
						operation: ['Raw'],
					},
				},
				type: 'string',
				noDataExpression: false,
				default: '{ "jsonrpc": "2.0", "method": "VideoLibrary.Scan", "id": "mybash"}'
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const operation = this.getNodeParameter('operation', 0) as string;
		const returnData: INodeExecutionData[] = [];

		try {
			const credentials = await this.getCredentials('kodiApi') as unknown as KodiCredentials;
			const host = credentials.host;
			const port = credentials.port;
			const username = credentials.username;
			const password = credentials.password;
			let url = "";
			let payload = "";
			
			if (username.trim().length > 0 && password.trim().length > 0) {
				url = "http://"+username+":"+password+"@"+host+":"+port+"/jsonrpc";
			}
			else {
				url = "http://"+host+":"+port+"/jsonrpc";
			}

			if (operation === "Scan" || operation === "Clean") {
				const library = this.getNodeParameter('library', 0) as string;
				payload = JSON.stringify({
					jsonrpc: "2.0",
					method: library+"."+operation,
					id: "mybash"
				});

			}
			else if (operation === "Raw") {
				payload = this.getNodeParameter('payload', 0) as string;
			}
			else if (operation === "Get") {
				const library = this.getNodeParameter('library', 0) as string;
				const type = this.getNodeParameter('type', 0) as string;
				payload = JSON.stringify({
					jsonrpc: "2.0",
					method: library+"."+type,
					id: "mybash"
				});
			}

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: payload
			});

			const body = await response.json() as JsonRPC;
			let returnVal;
			if (operation === "Get") {
				const type = this.getNodeParameter('type', 0) as string;
				// TODO: Allow for raw output
				if (type === "GetMovies") {
					let result = body.result as MoviesResult
					let movies = result["movies"] as Movie[];
					for (const m of movies) {
						returnData.push({ json: m as unknown as IDataObject });	
					}
				}
			}
			else {
				returnVal = body;
				returnData.push({ json: returnVal as unknown as IDataObject });
			}
			return [returnData];

		} catch (error) {
			throw error;
		}
	}
}

interface Movie {
  label: string;
  movieid: number;
}

interface Result {
  [key: string]: unknown;
  limits: unknown;
}

interface MoviesResult extends Result {
  movies: Movie[];
  limits: unknown;
}

interface JsonRPC {
  id: string;
  jsonrpc: string;
  result: Result;
}
