import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type IDataObject,
	type INodeTypeDescription,
	type INodePropertyOptions,
	type ILoadOptionsFunctions,
	NodeConnectionType,
	NodeOperationError,
} from 'n8n-workflow';
import { KodiService } from './KodiService';

export class Kodi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Kodi',
		name: 'kodi',
		group: ['transform'],
		version: 2,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Control Kodi with dynamic method discovery',
		icon: 'file:Kodi.svg',
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
						name: 'Execute Method',
						value: 'execute',
						description: 'Execute a Kodi JSON-RPC method',
						action: 'Execute a kodi method',
					},
					{
						name: 'Raw JSON-RPC',
						value: 'raw',
						description: 'Execute raw JSON-RPC command',
						action: 'Execute raw JSON-RPC',
					},
					{
						name: 'Discover Methods',
						value: 'discover',
						description: 'Discover available methods from Kodi',
						action: 'Discover available methods',
					},
				],
				default: 'execute',
				noDataExpression: true,
			},
			{
				displayName: 'Method Category Name or ID',
				name: 'methodCategory',
				type: 'options',
				displayOptions: {
					show: {
						operation: ['execute'],
					},
				},
				typeOptions: {
					loadOptionsMethod: 'getMethodCategories',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				noDataExpression: true,
			},
			{
				displayName: 'Method Name or ID',
				name: 'method',
				type: 'options',
				displayOptions: {
					show: {
						operation: ['execute'],
					},
				},
				typeOptions: {
					loadOptionsMethod: 'getMethods',
					loadOptionsDependsOn: ['methodCategory'],
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				noDataExpression: true,
			},
			{
				displayName: 'Raw JSON-RPC',
				name: 'rawPayload',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['raw'],
					},
				},
				default: '{ "jsonrpc": "2.0", "method": "VideoLibrary.Scan", "id": "n8n" }',
				description: 'Raw JSON-RPC payload to send to Kodi',
				noDataExpression: false,
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Force Method Discovery',
						name: 'forceDiscovery',
						type: 'boolean',
						default: false,
						description: 'Whether to force rediscovery of available methods',
					},
					{
						displayName: 'Include Method Info',
						name: 'includeMethodInfo',
						type: 'boolean',
						default: false,
						description: 'Whether to include method information in the output',
					},
				],
			},
		],
	};

	methods = {
		loadOptions: {
			async getMethodCategories(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('kodiApi');
				if (!credentials) {
					return [];
				}

				try {
					const kodiService = new KodiService(credentials as any);
					await kodiService.discoverMethods();
					const categories = kodiService.getMethodsByCategory();
					
					// Add "All" option at the beginning
					const options = [
						{
							name: 'All',
							value: 'All',
							description: 'Show all available methods',
						},
						...Object.keys(categories).map(category => ({
							name: category,
							value: category,
							description: `${categories[category].length} methods available`,
						}))
					];
					
					return options;
				} catch (error) {
					return [
						{
							name: 'All',
							value: 'All',
							description: 'Show all available methods',
						}
					];
				}
			},

			async getMethods(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('kodiApi');
				const methodCategory = this.getCurrentNodeParameter('methodCategory') as string;
				
				if (!credentials) {
					return [];
				}

				try {
					const kodiService = new KodiService(credentials as any);
					await kodiService.discoverMethods();
					const categories = kodiService.getMethodsByCategory();
					
					let methods: any[] = [];
					if (methodCategory === 'All') {
						// If "All" is selected, flatten all methods from all categories
						methods = Object.values(categories).flat();
					} else if (methodCategory && categories[methodCategory]) {
						methods = categories[methodCategory];
					}
					
					return methods.map(method => ({
						name: method.name,
						value: method.name,
						description: method.description || '',
					}));
				} catch (error) {
					return [];
				}
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const operation = this.getNodeParameter('operation', 0) as string;
		const returnData: INodeExecutionData[] = [];

		try {
			const credentials = await this.getCredentials('kodiApi') as any;
			const kodiService = new KodiService(credentials);
			const options = this.getNodeParameter('options', 0, {}) as IDataObject;

			// Force discovery if requested
			if (options.forceDiscovery) {
				await kodiService.discoverMethods();
			}

			let result: any;

			if (operation === 'execute') {
				const method = this.getNodeParameter('method', 0) as string;
				
				result = await kodiService.executeMethod(method);

				// Include method info if requested
				if (options.includeMethodInfo) {
					const methods = await kodiService.discoverMethods();
					const methodInfo = methods.find(m => m.name === method);
					if (methodInfo) {
						result = {
							method: methodInfo,
							result: result,
						};
					}
				}
			} else if (operation === 'raw') {
				const rawPayload = this.getNodeParameter('rawPayload', 0) as string;
				
				let payload: any;
				try {
					payload = JSON.parse(rawPayload);
				} catch (error) {
					throw new NodeOperationError(this.getNode(), 'Invalid JSON in raw payload');
				}

				// Validate JSON-RPC format
				if (!payload.jsonrpc || !payload.method || !payload.id) {
					throw new NodeOperationError(this.getNode(), 'Invalid JSON-RPC format. Must include jsonrpc, method, and id fields.');
				}

				result = await kodiService.makeRequest(payload);
				if (result.error) {
					throw new NodeOperationError(this.getNode(), `Kodi error: ${result.error.message} (code: ${result.error.code})`);
				}
				result = result.result;
			} else if (operation === 'discover') {
				const methods = await kodiService.discoverMethods();
				const categories = kodiService.getMethodsByCategory();
				
				result = {
					totalMethods: methods.length,
					categories: Object.keys(categories).map(category => ({
						name: category,
						methodCount: categories[category].length,
						methods: categories[category],
					})),
					allMethods: methods,
				};
			}

			// Handle different result types
			if (result && typeof result === 'object') {
				if (Array.isArray(result)) {
					// If result is an array, create separate items
					for (const item of result) {
						returnData.push({ json: item as IDataObject });
					}
				} else {
					// If result is an object, check for common Kodi result structures
					if (result.movies) {
						for (const movie of result.movies) {
							returnData.push({ json: movie as IDataObject });
						}
					} else if (result.tvshows) {
						for (const show of result.tvshows) {
							returnData.push({ json: show as IDataObject });
						}
					} else if (result.albums) {
						for (const album of result.albums) {
							returnData.push({ json: album as IDataObject });
						}
					} else if (result.artists) {
						for (const artist of result.artists) {
							returnData.push({ json: artist as IDataObject });
						}
					} else if (result.songs) {
						for (const song of result.songs) {
							returnData.push({ json: song as IDataObject });
						}
					} else {
						// Default case: return the entire result
						returnData.push({ json: result as IDataObject });
					}
				}
			} else {
				// Handle primitive results
				returnData.push({ json: { result } as IDataObject });
			}

			return [returnData];
		} catch (error) {
			throw new NodeOperationError(this.getNode(), (error as Error).message);
		}
	}
}
