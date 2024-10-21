'use client';
import { setToken } from '@/store/user/userSlice';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  // InternalAxiosRequestConfig,
} from 'axios';
import { enqueueSnackbar } from 'notistack';
import { getCookie } from '@/utils/methods';
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'Env var `API_URL` is not defined';
export const baseURL = `${API_URL}`;

export const http = axios.create({
  baseURL,
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getCookie('auth_token') as string;
    if (token) {
      if (typeof window !== 'undefined') {
        setToken(token);
      }
      config.headers.Authorization = `Bearer ${token}`;
      document.cookie = `token=${token}; path=/; max-age=3600`;
    }
    config.headers.Accept = 'application/json';
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(new Error('Request failed: ' + error.message));
  }
);

http.interceptors.response.use(
  <T, D>(res: AxiosResponse<T, D>) => {
    return res.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 403) {
        enqueueSnackbar({ variant: 'error', message: 'ورود غیر مجاز' });
        console.log('UNAUTHORIZED');
      }
    }
    return Promise.reject(new Error('Request failed: ' + error.message));
  }
);
