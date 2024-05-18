import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
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

const apiProfileInfo = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/profile/', // Ajuste a URL base conforme necessário
});

apiProfileInfo.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers = new AxiosHeaders({
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json;version=v1_web',
        'Content-Type': 'application/json',
      });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
