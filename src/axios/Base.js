import Axios from 'axios';

export const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://backend.rastaiha.ir/api/'
    : 'https://backend.rastaiha.ir/api/';

const baseAxios = Axios.create({
  baseURL: baseURL,
  timeout: 20000,
  maxRedirects: 5,
});

export default baseAxios;
