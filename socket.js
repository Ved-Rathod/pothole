import io from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

let socket;

export const initiateSocketConnection = () => {
  socket = io(SOCKET_URL);
  console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
};

export const subscribeToPotholes = (cb) => {
  if (!socket) return(true);
  socket.on('new_pothole', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
};
