import axios from 'axios';
import { Plugin } from '@nuxt/types';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

const apiPlugin: Plugin = (_, inject) => {
  inject('api', api);
};

export default apiPlugin;
