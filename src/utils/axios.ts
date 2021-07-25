import axiosInstance from 'axios';

axiosInstance.defaults.baseURL = 'https://api.github.com/search/users';
axiosInstance.defaults.headers.get = {
  'Content-Type': 'application/json',
};

export default axiosInstance;
