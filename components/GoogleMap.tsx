"use client";

interface GoogleMapComponentProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

const defaultCenter = {
  lat: 40.7128,
  lng: -74.006
};

export function GoogleMapComponent({
  center = defaultCenter,
  zoom = 12
}: GoogleMapComponentProps) {
  // Construct the embed URL
  // We use q=location to center the map
  const mapSrc = `https://maps.google.com/maps?q=${center.lat},${center.lng}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-100">
      <iframe
        width="100%"
        height="100%"
        src={mapSrc}
        title="Property Location Map"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        style={{ filter: "grayscale(20%) contrast(1.1)" }}
      />
    </div>
  );
}
