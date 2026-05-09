import React from 'react';
import { AlertTriangle, Clock, Activity, Zap } from 'lucide-react';

const AlertBox = ({ pothole }) => {
  const timeString = new Date(pothole.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="alert-box">
      <div className="alert-header">
        <div className="alert-title">
          <AlertTriangle size={18} />
          <span>Pothole Detected</span>
        </div>
        <div className="alert-time">
          <Clock size={12} className="inline mr-1" />
          {timeString}
        </div>
      </div>
      
      <div className="alert-details">
        <div className="detail-item">
          <span>MAGNITUDE (Z-ACCEL)</span>
          <div className="flex items-center text-white mt-1">
            <Activity size={14} className="mr-1 text-blue-400" />
            <span className="font-semibold">{pothole.magnitude?.toFixed(2)} g</span>
          </div>
        </div>
        
        <div className="detail-item">
          <span>VEHICLE SPEED</span>
          <div className="flex items-center text-white mt-1">
            <Zap size={14} className="mr-1 text-yellow-400" />
            <span className="font-semibold">{pothole.speed?.toFixed(1)} km/h</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700/50 flex justify-between text-xs text-gray-400">
        <span>Lat: {pothole.lat?.toFixed(6)}</span>
        <span>Lng: {pothole.lng?.toFixed(6)}</span>
      </div>
    </div>
  );
};

export default AlertBox;
