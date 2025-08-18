import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KodiApi implements ICredentialType {
	name = 'kodiApi';
	displayName = 'Kodi API';
        documentationUrl = 'https://github.com/PhilippMundhenk/n8n-nodes-kodi';
	properties: INodeProperties[] = [
		{
			displayName: 'Server',
			name: 'host',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'User Name',
			name: 'username',
			type: 'string',
			required: false,
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			noDataExpression: true,
			required: false,
			default: '',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 8080,
		},
		{
			displayName: 'Enable Method Discovery',
			name: 'enableDiscovery',
			type: 'boolean',
			default: true,
			description: 'Automatically discover available JSON-RPC methods from Kodi',
		},
		{
			displayName: 'Discovery Timeout (ms)',
			name: 'discoveryTimeout',
			type: 'number',
			default: 5000,
			description: 'Timeout for method discovery in milliseconds',
			displayOptions: {
				show: {
					enableDiscovery: [true],
				},
			},
		},
	];
}
