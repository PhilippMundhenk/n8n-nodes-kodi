import fetch from 'node-fetch';

/**
 * Interface defining the credentials required to connect to a Kodi instance
 */
export interface KodiCredentials {
	host: string;           // Kodi server hostname or IP address
	port: number;           // Kodi server port (usually 8080)
	username: string;       // Username for HTTP authentication (if enabled)
	password: string;       // Password for HTTP authentication (if enabled)
	enableDiscovery?: boolean;  // Whether to enable dynamic method discovery
	discoveryTimeout?: number;  // Timeout for discovery operations in milliseconds
}

/**
 * Interface for JSON-RPC requests sent to Kodi
 */
export interface JsonRPCRequest {
	jsonrpc: string;        // JSON-RPC version (always "2.0")
	method: string;         // Kodi method name to execute
	params?: any;           // Optional parameters for the method
	id: string;             // Unique request identifier
}

/**
 * Interface for JSON-RPC responses received from Kodi
 */
export interface JsonRPCResponse {
	jsonrpc: string;        // JSON-RPC version (always "2.0")
	id: string;             // Request identifier (echoed back)
	result?: any;           // Successful response data
	error?: {               // Error information if the request failed
		code: number;        // Error code
		message: string;     // Human-readable error message
		data?: any;          // Additional error data
	};
}

/**
 * Interface representing a Kodi JSON-RPC method
 */
export interface KodiMethod {
	name: string;           // Method name (e.g., "VideoLibrary.Scan")
	description?: string;   // Human-readable description of what the method does
	params?: any[];         // Expected parameters for the method
	returns?: any;          // Return value structure
}

/**
 * Service class for communicating with Kodi via JSON-RPC
 * Handles method discovery, execution, and connection management
 */
export class KodiService {
	private credentials: KodiCredentials;        // Stored credentials
	private baseUrl: string;                     // Constructed HTTP URL for Kodi
	private availableMethods: KodiMethod[] = []; // Cache of discovered methods
	private methodsLoaded = false;               // Flag indicating if methods have been loaded

	/**
	 * Constructor - initializes the service with Kodi connection details
	 * @param credentials - Kodi connection credentials
	 */
	constructor(credentials: KodiCredentials) {
		this.credentials = credentials;
		this.baseUrl = this.buildUrl();
	}

	/**
	 * Builds the HTTP URL for connecting to Kodi
	 * Includes authentication if username/password are provided
	 * @returns Complete HTTP URL for Kodi JSON-RPC endpoint
	 */
	private buildUrl(): string {
		const { host, port, username, password } = this.credentials;
		if (username.trim().length > 0 && password.trim().length > 0) {
			return `http://${username}:${password}@${host}:${port}/jsonrpc`;
		}
		return `http://${host}:${port}/jsonrpc`;
	}

	/**
	 * Discovers available JSON-RPC methods from the Kodi instance
	 * Uses introspection if available, falls back to predefined common methods
	 * @returns Array of available Kodi methods
	 */
	async discoverMethods(): Promise<KodiMethod[]> {
		// Return cached methods if already discovered
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

	/**
	 * Attempts to discover methods using Kodi's JSON-RPC introspection
	 * This is the most accurate way to get available methods
	 * @returns Array of discovered methods or empty array if introspection fails
	 */
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

	/**
	 * Provides a comprehensive list of common Kodi methods
	 * Used as fallback when dynamic discovery is not available
	 * @returns Array of common Kodi methods with descriptions
	 */
	private getCommonMethods(): KodiMethod[] {
		// Common Kodi methods based on the JSON-RPC API documentation
		return [
			// Video Library - Manage and query video content
			{ name: 'VideoLibrary.Scan', description: 'Scan video library for new content' },
			{ name: 'VideoLibrary.Clean', description: 'Clean video library' },
			{ name: 'VideoLibrary.GetMovies', description: 'Get all movies' },
			{ name: 'VideoLibrary.GetTVShows', description: 'Get all TV shows' },
			{ name: 'VideoLibrary.GetEpisodes', description: 'Get episodes for a TV show' },
			{ name: 'VideoLibrary.GetMusicVideos', description: 'Get all music videos' },
			{ name: 'VideoLibrary.GetMovieDetails', description: 'Get details for a specific movie' },
			{ name: 'VideoLibrary.GetTVShowDetails', description: 'Get details for a specific TV show' },
			
			// Audio Library - Manage and query audio content
			{ name: 'AudioLibrary.Scan', description: 'Scan audio library for new content' },
			{ name: 'AudioLibrary.Clean', description: 'Clean audio library' },
			{ name: 'AudioLibrary.GetAlbums', description: 'Get all albums' },
			{ name: 'AudioLibrary.GetArtists', description: 'Get all artists' },
			{ name: 'AudioLibrary.GetSongs', description: 'Get all songs' },
			{ name: 'AudioLibrary.GetAlbumDetails', description: 'Get details for a specific album' },
			{ name: 'AudioLibrary.GetArtistDetails', description: 'Get details for a specific artist' },
			
			// Player Control - Control media playback
			{ name: 'Player.GetActivePlayers', description: 'Get currently active players' },
			{ name: 'Player.GetProperties', description: 'Get player properties' },
			{ name: 'Player.PlayPause', description: 'Play or pause current media' },
			{ name: 'Player.Stop', description: 'Stop current media' },
			{ name: 'Player.Seek', description: 'Seek to position in current media' },
			{ name: 'Player.SetSpeed', description: 'Set playback speed' },
			
			// Playlist - Manage media playlists
			{ name: 'Playlist.GetItems', description: 'Get items in current playlist' },
			{ name: 'Playlist.Add', description: 'Add items to playlist' },
			{ name: 'Playlist.Clear', description: 'Clear current playlist' },
			{ name: 'Playlist.Remove', description: 'Remove item from playlist' },
			
			// System - Control Kodi system operations
			{ name: 'System.GetProperties', description: 'Get system properties' },
			{ name: 'System.Hibernate', description: 'Hibernate system' },
			{ name: 'System.Reboot', description: 'Reboot system' },
			{ name: 'System.Shutdown', description: 'Shutdown system' },
			{ name: 'System.Suspend', description: 'Suspend system' },
			
			// Application - Control Kodi application
			{ name: 'Application.GetProperties', description: 'Get application properties' },
			{ name: 'Application.SetVolume', description: 'Set application volume' },
			{ name: 'Application.Quit', description: 'Quit application' },
			
			// Files - File system operations
			{ name: 'Files.GetDirectory', description: 'Get directory contents' },
			{ name: 'Files.GetFileDetails', description: 'Get file details' },
			{ name: 'Files.GetSources', description: 'Get media sources' },
			
			// Addons - Manage Kodi addons
			{ name: 'Addons.GetAddons', description: 'Get installed addons' },
			{ name: 'Addons.GetAddonDetails', description: 'Get addon details' },
			{ name: 'Addons.ExecuteAddon', description: 'Execute an addon' },
			
			// GUI - Control Kodi user interface
			{ name: 'GUI.ShowNotification', description: 'Show notification' },
			{ name: 'GUI.ActivateWindow', description: 'Activate a window' },
			{ name: 'GUI.GetProperties', description: 'Get GUI properties' }
		];
	}

	/**
	 * Sends a JSON-RPC request to Kodi
	 * @param request - The JSON-RPC request to send
	 * @returns JSON-RPC response from Kodi
	 * @throws Error if the HTTP request fails
	 */
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

	/**
	 * Executes a specific Kodi method with optional parameters
	 * @param method - The Kodi method name to execute
	 * @param params - Optional parameters for the method
	 * @returns The result of the method execution
	 * @throws Error if the method execution fails
	 */
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

	/**
	 * Organizes discovered methods by category for easier navigation
	 * @returns Object mapping category names to arrays of methods
	 */
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
}
