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
			required: true,
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
			required: true,
			default: '',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 8080,
		},
	];
}
