import axios from 'src/utils/axios';

export const getUsers = async (query: string) => {
  return axios.get('', { params: { q: query, per_page: 5 } });
};

export const getRepositories = async (url: string) => {
  return axios.get(url);
};
