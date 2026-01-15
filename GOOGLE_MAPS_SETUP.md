# Google Maps Setup Instructions

To enable the interactive Google Map on the home page, you need to:

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API"
   - Create credentials (API Key)
   - Restrict the API key to your domain (recommended for production)

2. **Add the API Key to your environment:**
   - Create a `.env.local` file in the root directory
   - Add: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here`
   - Restart your development server

3. **The map will automatically load** once the API key is configured.

**Note:** Without an API key, the map will show a helpful placeholder message.
