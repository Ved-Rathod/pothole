import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MapView from './components/MapView';
import AlertBox from './components/AlertBox';
import './index.css';

// Assuming the backend runs on port 5000 locally
const SOCKET_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [potholes, setPotholes] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Connect to WebSocket Server
    const socket = io(SOCKET_URL);

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to backend');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from backend');
    });

    // Receive initial history
    socket.on('history', (historyData) => {
      // Assuming history comes sorted oldest to newest, reverse it for feed
      setPotholes(historyData.reverse());
    });

    // Receive new real-time event
    socket.on('new_pothole', (newPothole) => {
      setPotholes((prev) => [newPothole, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="dashboard-container">
      {/* Left Sidebar - Live Feed */}
      <div className="glass-panel">
        <div className="header">
          <h1>Pothole Radar</h1>
          <p className="flex justify-between items-center">
            <span>Live Detection Feed</span>
            <span className="flex items-center">
              <span className={`h-2 w-2 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
              {isConnected ? 'Live' : 'Offline'}
            </span>
          </p>
        </div>

        <div className="feed-container">
          {potholes.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>No potholes detected yet.</p>
              <p className="text-xs mt-2">Waiting for events...</p>
            </div>
          ) : (
            potholes.map((p, idx) => (
              <AlertBox key={idx} pothole={p} />
            ))
          )}
        </div>
      </div>

      {/* Main Content - Map */}
      <MapView potholes={potholes} />
    </div>
  );
}

export default App;
