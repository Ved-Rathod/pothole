import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom pothole icon (red marker)
const potholeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to recenter map when new pothole arrives
const MapUpdater = ({ latestPothole }) => {
  const map = useMap();
  useEffect(() => {
    if (latestPothole) {
      map.flyTo([latestPothole.lat, latestPothole.lng], 16, {
        animate: true,
        duration: 1.5
      });
    }
  }, [latestPothole, map]);
  return null;
};

const MapView = ({ potholes }) => {
  // Default center (can be user's current location or a fixed city)
  const defaultCenter = potholes.length > 0 
    ? [potholes[0].lat, potholes[0].lng] 
    : [12.9716, 77.5946]; // Default to Bangalore, India as placeholder

  const latestPothole = potholes.length > 0 ? potholes[0] : null;

  return (
    <div className="map-area">
      <MapContainer 
        center={defaultCenter} 
        zoom={13} 
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        {/* Dark mode map tiles for aesthetics */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        <MapUpdater latestPothole={latestPothole} />

        {potholes.map((p, index) => (
          <Marker 
            key={index} 
            position={[p.lat, p.lng]} 
            icon={potholeIcon}
          >
            <Popup className="custom-popup">
              <div className="text-center">
                <h3 className="font-bold text-red-400 mb-1">Pothole Detected</h3>
                <p className="text-sm">Magnitude: {p.magnitude.toFixed(2)}g</p>
                <p className="text-sm">Speed: {p.speed.toFixed(1)} km/h</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(p.timestamp).toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
