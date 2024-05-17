// axiosInstance.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/login/',
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('entrou no interception');
      return Promise.reject({
        ...error,
        message: 'Unauthorized access - please log in again.',
      });
    }
    return Promise.reject(error);
  }
);

export default api;
