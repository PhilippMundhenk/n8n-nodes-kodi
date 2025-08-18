# n8n Kodi Node

A powerful n8n node for controlling Kodi media centers with dynamic JSON-RPC method discovery.

## Features

### 🚀 Dynamic Method Discovery
- **Automatic Discovery**: Automatically retrieves available JSON-RPC methods from your Kodi instance
- **Self-Descriptive**: Leverages Kodi's JSON-RPC introspection capabilities
- **Fallback Support**: Falls back to common methods if introspection isn't available
- **Real-time Updates**: Methods are loaded when credentials are available or when the node is created

### 🎯 Smart Method Organization
- **Categorized Methods**: Methods are automatically organized by category (VideoLibrary, AudioLibrary, Player, etc.)
- **Intelligent UI**: Dynamic dropdowns that show available methods based on your Kodi instance
- **Method Descriptions**: Built-in descriptions for all common Kodi methods

### ⚙️ Advanced Options
- **Raw JSON-RPC**: Execute custom JSON-RPC commands for advanced users
- **Parameter Support**: Pass parameters to methods using JSON format
- **Method Information**: Option to include method metadata in output
- **Force Discovery**: Manually trigger method rediscovery

### 🔧 Configuration Options
- **Connection Settings**: Host, port, username, and password
- **Discovery Control**: Enable/disable automatic method discovery
- **Timeout Settings**: Configurable discovery timeout

## Operations

### Execute Method
Execute any available Kodi method with parameters:
- **Method Category**: Choose from available categories (VideoLibrary, AudioLibrary, Player, etc.)
- **Method**: Select the specific method to execute
- **Parameters**: JSON parameters to pass to the method

### Raw JSON-RPC
Execute custom JSON-RPC commands:
- **Raw JSON-RPC**: Full JSON-RPC payload in standard format
- **Validation**: Automatic validation of JSON-RPC format

### Discover Methods
Get information about available methods:
- **Total Methods**: Count of available methods
- **Categories**: Breakdown by category with method counts
- **Method Details**: Full method information including descriptions

## Common Use Cases

### Media Library Management
```json
{
  "method": "VideoLibrary.Scan",
  "parameters": {}
}
```

### Player Control
```json
{
  "method": "Player.PlayPause",
  "parameters": {"playerid": 1}
}
```

### System Control
```json
{
  "method": "System.Shutdown",
  "parameters": {}
}
```

## Installation

1. Install the package in your n8n instance
2. Add Kodi credentials with your server details
3. Create a Kodi node in your workflow
4. Methods will be automatically discovered and available

## Credentials

- **Server**: Kodi server hostname or IP address
- **Port**: HTTP port (default: 8080)
- **Username**: Optional username for authentication
- **Password**: Optional password for authentication
- **Enable Method Discovery**: Toggle automatic method discovery
- **Discovery Timeout**: Timeout for method discovery in milliseconds

## JSON-RPC Support

This node supports the full Kodi JSON-RPC API as documented at:
- [Kodi JSON-RPC API](https://kodi.wiki/view/JSON-RPC_API)
- [Kodi JSON-RPC Examples](https://kodi.wiki/view/JSON-RPC_API/Examples)

## Version History

### v2.0.0
- Complete rewrite with dynamic method discovery
- Programmatic approach instead of declarative
- Automatic method loading from Kodi instances
- Enhanced UI with categorized method selection
- Advanced raw JSON-RPC support
- SVG icon replacement

### v1.x
- Original declarative implementation
- Basic library operations
- Simple method execution

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE.md for details.
