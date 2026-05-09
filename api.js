/**
 * REST API Service
 * Used to fetch historical pothole data on initial dashboard load.
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchPotholeHistory = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/potholes`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching pothole history:", error);
    return [];
  }
};
