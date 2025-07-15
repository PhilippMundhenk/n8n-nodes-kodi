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
						name: 'Update',
						value: 'Scan',
						description: 'Update library',
						action: 'Update library',
					},
					{
						name: 'Clean',
						value: 'Clean',
						description: 'Clean library',
						action: 'Clean library',
					},
				],
				default: 'Scan',
				noDataExpression: true,
			},
			{
				displayName: 'Library',
				name: 'library',
				type: 'options',
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
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const operation = this.getNodeParameter('operation', 0) as string;
		const library = this.getNodeParameter('library', 0) as string;
		const returnData: INodeExecutionData[] = [];

		try {
			const credentials = await this.getCredentials('kodiApi') as unknown as KodiCredentials;
			const host = credentials.host;
			const port = credentials.port;
			const username = credentials.username;
			const password = credentials.password;
			
			if (username.trim().length > 0 && password.trim().length > 0) {
				const url = "http://"+username+":"+password+"@"+host+":"+port+"/jsonrpc";
			}
			else {
				const url = "http://"+host+":"+port+"/jsonrpc";
			}

			const payload = {
				jsonrpc: "2.0",
				method: library+"."+operation,
				id: "mybash"
			};

			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)  // Convert payload to JSON string
			});

			return [returnData];
		} catch (error) {
			throw error;
		}
	}
}
