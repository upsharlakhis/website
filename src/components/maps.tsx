"use client";

import { useEffect, useState } from "react";

export default function MapComponent() {
  const [mapIsReady, setMapIsReady] = useState(false);

  useEffect(() => {
    const initializeMap = async () => {
      const L = await import('leaflet');
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
      
      await import('leaflet/dist/leaflet.css');
      
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
      });
      
      setMapIsReady(true);
    };

    initializeMap();
  }, []);

  if (!mapIsReady) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
        Loading map...
      </div>
    );
  }

  const MapContent = () => {
    const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
    const position = [28.6139, 77.2090];
    
    return (
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Welcome to New Delhi!</Popup>
        </Marker>
      </MapContainer>
    );
  };

  return <MapContent />;
}