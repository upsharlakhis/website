"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet and react-leaflet (avoiding SSR issues)
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

export default function MapComponent() {
  const [L, setLeaflet] = useState<any>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setLeaflet(leaflet);

      // Fix default marker icon issue
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
      });
    });
  }, []);

  const position: [number, number] = [28.6139, 77.2090]; // New Delhi

  return (
    <div className="h-[400px] w-full">
      {L ? (
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Welcome to New Delhi!</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="h-full flex items-center justify-center bg-gray-100">Loading map...</div>
      )}
    </div>
  );
}
