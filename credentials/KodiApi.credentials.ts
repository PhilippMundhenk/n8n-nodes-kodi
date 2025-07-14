import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KodiApi implements ICredentialType {
	name = 'KodiApi';
	displayName = 'Kodi API';
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
			default: 445,
		},
	];
}
