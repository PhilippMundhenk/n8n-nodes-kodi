import fetch from 'node-fetch';

export interface KodiCredentials {
	host: string;
	port: number;
	username: string;
	password: string;
	enableDiscovery?: boolean;
	discoveryTimeout?: number;
}

export interface JsonRPCRequest {
	jsonrpc: string;
	method: string;
	params?: any;
	id: string;
}

export interface JsonRPCResponse {
	jsonrpc: string;
	id: string;
	result?: any;
	error?: {
		code: number;
		message: string;
		data?: any;
	};
}

export interface KodiMethod {
	name: string;
	description?: string;
	params?: any[];
	returns?: any;
}

export class KodiService {
	private credentials: KodiCredentials;
	private baseUrl: string;
	private availableMethods: KodiMethod[] = [];
	private methodsLoaded = false;

	constructor(credentials: KodiCredentials) {
		this.credentials = credentials;
		this.baseUrl = this.buildUrl();
	}

	private buildUrl(): string {
		const { host, port, username, password } = this.credentials;
		if (username.trim().length > 0 && password.trim().length > 0) {
			return `http://${username}:${password}@${host}:${port}/jsonrpc`;
		}
		return `http://${host}:${port}/jsonrpc`;
	}

	async discoverMethods(): Promise<KodiMethod[]> {
		if (this.methodsLoaded) {
			return this.availableMethods;
		}

		// Check if discovery is enabled
		if (this.credentials.enableDiscovery === false) {
			this.availableMethods = this.getCommonMethods();
			this.methodsLoaded = true;
			return this.availableMethods;
		}

		try {
			// Try to get methods from JSON-RPC introspection
			const methods = await this.getAvailableMethods();
			if (methods.length > 0) {
				this.availableMethods = methods;
				this.methodsLoaded = true;
				return methods;
			}

			// Fallback to common Kodi methods if introspection fails
			this.availableMethods = this.getCommonMethods();
			this.methodsLoaded = true;
			return this.availableMethods;
		} catch (error) {
			// If discovery fails, use common methods
			this.availableMethods = this.getCommonMethods();
			this.methodsLoaded = true;
			return this.availableMethods;
		}
	}

	private async getAvailableMethods(): Promise<KodiMethod[]> {
		try {
			// Try to get methods using JSON-RPC introspection
			const response = await this.makeRequest({
				jsonrpc: '2.0',
				method: 'JSONRPC.Introspect',
				id: 'discovery'
			});

			if (response.result && response.result.methods) {
				return Object.keys(response.result.methods).map(methodName => ({
					name: methodName,
					description: response.result.methods[methodName].description || '',
					params: response.result.methods[methodName].params || [],
					returns: response.result.methods[methodName].returns || {}
				}));
			}
		} catch (error) {
			// Introspection not available, continue to fallback
		}

		return [];
	}

	private getCommonMethods(): KodiMethod[] {
		// Common Kodi methods based on the JSON-RPC API documentation
		return [
			// Video Library
			{ name: 'VideoLibrary.Scan', description: 'Scan video library for new content' },
			{ name: 'VideoLibrary.Clean', description: 'Clean video library' },
			{ name: 'VideoLibrary.GetMovies', description: 'Get all movies' },
			{ name: 'VideoLibrary.GetTVShows', description: 'Get all TV shows' },
			{ name: 'VideoLibrary.GetEpisodes', description: 'Get episodes for a TV show' },
			{ name: 'VideoLibrary.GetMusicVideos', description: 'Get all music videos' },
			{ name: 'VideoLibrary.GetMovieDetails', description: 'Get details for a specific movie' },
			{ name: 'VideoLibrary.GetTVShowDetails', description: 'Get details for a specific TV show' },
			
			// Audio Library
			{ name: 'AudioLibrary.Scan', description: 'Scan audio library for new content' },
			{ name: 'AudioLibrary.Clean', description: 'Clean audio library' },
			{ name: 'AudioLibrary.GetAlbums', description: 'Get all albums' },
			{ name: 'AudioLibrary.GetArtists', description: 'Get all artists' },
			{ name: 'AudioLibrary.GetSongs', description: 'Get all songs' },
			{ name: 'AudioLibrary.GetAlbumDetails', description: 'Get details for a specific album' },
			{ name: 'AudioLibrary.GetArtistDetails', description: 'Get details for a specific artist' },
			
			// Player Control
			{ name: 'Player.GetActivePlayers', description: 'Get currently active players' },
			{ name: 'Player.GetProperties', description: 'Get player properties' },
			{ name: 'Player.PlayPause', description: 'Play or pause current media' },
			{ name: 'Player.Stop', description: 'Stop current media' },
			{ name: 'Player.Seek', description: 'Seek to position in current media' },
			{ name: 'Player.SetSpeed', description: 'Set playback speed' },
			
			// Playlist
			{ name: 'Playlist.GetItems', description: 'Get items in current playlist' },
			{ name: 'Playlist.Add', description: 'Add items to playlist' },
			{ name: 'Playlist.Clear', description: 'Clear current playlist' },
			{ name: 'Playlist.Remove', description: 'Remove item from playlist' },
			
			// System
			{ name: 'System.GetProperties', description: 'Get system properties' },
			{ name: 'System.Hibernate', description: 'Hibernate system' },
			{ name: 'System.Reboot', description: 'Reboot system' },
			{ name: 'System.Shutdown', description: 'Shutdown system' },
			{ name: 'System.Suspend', description: 'Suspend system' },
			
			// Application
			{ name: 'Application.GetProperties', description: 'Get application properties' },
			{ name: 'Application.SetVolume', description: 'Set application volume' },
			{ name: 'Application.Quit', description: 'Quit application' },
			
			// Files
			{ name: 'Files.GetDirectory', description: 'Get directory contents' },
			{ name: 'Files.GetFileDetails', description: 'Get file details' },
			{ name: 'Files.GetSources', description: 'Get media sources' },
			
			// Addons
			{ name: 'Addons.GetAddons', description: 'Get installed addons' },
			{ name: 'Addons.GetAddonDetails', description: 'Get addon details' },
			{ name: 'Addons.ExecuteAddon', description: 'Execute an addon' },
			
			// GUI
			{ name: 'GUI.ShowNotification', description: 'Show notification' },
			{ name: 'GUI.ActivateWindow', description: 'Activate a window' },
			{ name: 'GUI.GetProperties', description: 'Get GUI properties' }
		];
	}

	async makeRequest(request: JsonRPCRequest): Promise<JsonRPCResponse> {
		const response = await fetch(this.baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json() as JsonRPCResponse;
	}

	async executeMethod(method: string, params?: any): Promise<any> {
		const request: JsonRPCRequest = {
			jsonrpc: '2.0',
			method,
			params,
			id: `n8n-${Date.now()}`
		};

		const response = await this.makeRequest(request);
		
		if (response.error) {
			throw new Error(`Kodi error: ${response.error.message} (code: ${response.error.code})`);
		}

		return response.result;
	}

	getMethodsByCategory(): Record<string, KodiMethod[]> {
		const categories: Record<string, KodiMethod[]> = {};
		
		for (const method of this.availableMethods) {
			const category = method.name.split('.')[0];
			if (!categories[category]) {
				categories[category] = [];
			}
			categories[category].push(method);
		}
		
		return categories;
	}

	isConnected(): boolean {
		return this.methodsLoaded;
	}

	// Method to test connection and get basic info
	async testConnection(): Promise<{ success: boolean; info?: any; error?: string }> {
		try {
			const result = await this.executeMethod('Application.GetProperties', {
				properties: ['version', 'name']
			});
			return { success: true, info: result };
		} catch (error) {
			return { 
				success: false, 
				error: error instanceof Error ? error.message : 'Unknown error' 
			};
		}
	}
}
