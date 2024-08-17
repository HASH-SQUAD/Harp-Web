import axios from 'axios';
import { useMutation } from 'react-query';

const AUTH_URL = 'http://localhost:3000/';

export const AuthInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000
});

export const DefaultInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000
});

export const KakaoInstance = axios.create({
  baseURL: 'https://dapi.kakao.com',
  timeout: 10000
});
