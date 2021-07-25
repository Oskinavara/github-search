import axiosInstance from 'axios';

axiosInstance.defaults.baseURL = 'https://api.github.com/search/users';
axiosInstance.defaults.headers.get = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + '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',
};

export default axiosInstance;
