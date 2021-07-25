import axiosInstance from 'axios';

axiosInstance.defaults.baseURL = 'https://api.github.com/search/users';
axiosInstance.defaults.headers.get = {
  'Content-Type': 'application/json',
  Authorization: process.env.API_KEY,
};

export default axiosInstance;
