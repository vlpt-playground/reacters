import axios from 'axios';

const client = axios.create();

export const setToken = token => {
  client.defaults.headers.common['Authorization'] = token;
};
export default client;
