/**
 * Helper functions for the Pothole Dashboard
 */

// Formats a timestamp into a readable date string
export const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A';
  const date = new Date(timestamp);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Formats a timestamp into a readable time string
export const formatTime = (timestamp) => {
  if (!timestamp) return 'N/A';
  const date = new Date(timestamp);
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// Determines severity color based on pothole magnitude
export const getSeverityColor = (magnitude) => {
  if (magnitude < 2.0) return 'text-yellow-400';
  if (magnitude < 4.0) return 'text-orange-500';
  return 'text-red-500';
};
