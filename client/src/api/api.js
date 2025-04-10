// src/api/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getProfile = async () => {
  try {
    const res = await axios.get(`${API_BASE}/profiles`); // ✅ fixed from /profiles to /profile
    console.log('res: ', res);
    console.log('res.data: ', res.data);
    return res.data;
  } catch (error) {
    console.error('Error fetching profile:', error.message);
  }
};
