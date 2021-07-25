import axiosInstance from 'axios';
const API_KEY = process.env.API_KEY;
const authHeader = API_KEY ? `Bearer ${API_KEY}` : '';

axiosInstance.defaults.baseURL = 'https://api.github.com/search/users';
axiosInstance.defaults.headers.get = {
  'Content-Type': 'application/json',
  Authorization: authHeader,
};

export default axiosInstance;
