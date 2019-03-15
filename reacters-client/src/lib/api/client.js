import axios from 'axios';

const client = axios.create();

export const setToken = token => {
  client.defaults.headers.common['Authorization'] = token;
};

if (process.env.NODE_ENV === 'production') {
  client.defaults.baseURL = 'https://reacters.vlpt.us';
}
export default client;
