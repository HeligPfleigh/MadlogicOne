import axios from 'axios';

const API_SERVER = 'API';

const instance = axios.create({
  baseURL: API_SERVER,
  timeout: 10000,
});

export default instance;
