import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
        NodeConnectionType,
} from 'n8n-workflow';
import fetch from 'node-fetch';

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
						action: 'Update/Scan library',
					},
					{
						name: 'Clean',
						value: 'Clean',
						description: 'Clean library',
						action: 'Clean library',
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
						operation: ['Scan', 'Clean'],
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

			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: payload
			});

			return [returnData];

		} catch (error) {
			throw error;
		}
	}
}
