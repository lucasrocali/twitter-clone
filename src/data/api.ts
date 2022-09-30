import axios from 'axios';
import { getStoredToken } from './storage';

export interface PaginatedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T[];
}

export const API_URL = 'http://127.0.0.1:3333/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getStoredToken();
    if (token) {
      config.headers = {
        Authorization: `bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
