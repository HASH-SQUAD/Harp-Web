import { AuthInstance } from './Axios';

export const Auth_KakaoLogin = async () => {
  const { data } = await AuthInstance.get(`/auth/kakao/authstate`);
  return data;
};
