import axios from 'axios';

export interface PaginatedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T[];
}

export const API_URL = 'http://127.0.0.1:3333/';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
