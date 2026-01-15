"use client";

import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1.5rem"
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.006
};

// Property locations (mock coordinates for Aurora City)
const propertyLocations = [
  { lat: 40.7128, lng: -74.006, title: "Central District" },
  { lat: 40.7589, lng: -73.9851, title: "Elmwood Quarter" },
  { lat: 40.7282, lng: -73.9942, title: "Harborfront" },
  { lat: 40.7614, lng: -73.9776, title: "Parkside Avenue" },
  { lat: 40.7505, lng: -73.9934, title: "Foundry District" },
  { lat: 40.7489, lng: -73.968, title: "Downtown Heights" },
  { lat: 40.758, lng: -73.9855, title: "Hillside District" },
  { lat: 40.7282, lng: -73.9942, title: "Coastal Bay" },
  { lat: 40.7505, lng: -73.9934, title: "Arts Quarter" },
  { lat: 40.7589, lng: -73.9851, title: "Summit Ridge" },
  { lat: 40.7128, lng: -74.006, title: "Aurora Bay" }
];

interface GoogleMapComponentProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

export function GoogleMapComponent({
  center = defaultCenter,
  zoom = 12
}: GoogleMapComponentProps) {
  // Get API key from environment variable
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey
  });

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    }),
    []
  );

  // If no API key is provided, show setup instructions
  if (!apiKey || apiKey.trim() === "") {
    return (
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center">
        <div className="text-center space-y-4 p-8 max-w-md">
          <div className="text-5xl">📍</div>
          <h3 className="text-lg font-medium text-slate-900">Google Maps Setup Required</h3>
          <div className="space-y-3 text-sm text-slate-600 text-left bg-white p-4 rounded-xl border border-slate-200">
            <p className="font-medium text-slate-900">To enable the map:</p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Get your API key from{" "}
                <a
                  href="https://console.cloud.google.com/google/maps-apis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Cloud Console
                </a>
              </li>
              <li>Enable &quot;Maps JavaScript API&quot;</li>
              <li>Open <code className="bg-slate-100 px-1 rounded text-xs">.env.local</code> in the project root</li>
              <li>Replace <code className="bg-slate-100 px-1 rounded text-xs">your_api_key_here</code> with your actual API key</li>
              <li>Restart your dev server (<code className="bg-slate-100 px-1 rounded text-xs">npm run dev</code>)</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500">
            The map will automatically appear once configured.
          </p>
        </div>
      </div>
    );
  }

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="w-full h-full rounded-3xl bg-slate-200 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="text-4xl animate-spin">📍</div>
          <p className="text-slate-600 font-light text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  // Show error state if map failed to load
  if (loadError) {
    return (
      <div className="w-full h-full rounded-3xl bg-red-50 border border-red-200 flex items-center justify-center">
        <div className="text-center space-y-3 p-8">
          <div className="text-4xl">⚠️</div>
          <p className="text-red-700 font-medium">Failed to load map</p>
          <p className="text-xs text-red-600">
            Please check your API key and ensure Maps JavaScript API is enabled.
          </p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={mapOptions}
    >
      {propertyLocations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.title}
        />
      ))}
    </GoogleMap>
  );
}
