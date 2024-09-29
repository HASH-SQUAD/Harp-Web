import axios, { AxiosResponse } from 'axios';

const AUTH_URL = process.env.REACT_APP_API;

interface AuthResponse {
  status: number;
  success: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
}

export const AuthInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 60000,
  headers: {
    referrerPolicy: 'no-referrer'
  }
});

const refreshAccessToken = async (
  refreshToken: string
): Promise<AuthResponse | null> => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      `${AUTH_URL}/jwt`,
      {
        refreshToken,
        accessToken
      },
      {
        headers: {
          referrerPolicy: 'no-referrer'
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('refresh 토큰 에러', error);
    return null;
  }
};

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.accessToken = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AuthInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response;
      const refreshToken = localStorage.getItem('refreshToken');

      if (status === 403 && refreshToken) {
        const newToken = await refreshAccessToken(refreshToken);
        if (newToken && error.config) {
          localStorage.setItem('accessToken', newToken.accessToken);

          if (error.config.headers) {
            error.config.headers.accessToken = `${newToken.accessToken}`;
          }

          return axios.request(error.config);
        } else {
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export const DefaultInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000,
  headers: {
    referrerPolicy: 'no-referrer'
  }
});

export const KakaoInstance = axios.create({
  baseURL: 'https://dapi.kakao.com',
  timeout: 10000
});
