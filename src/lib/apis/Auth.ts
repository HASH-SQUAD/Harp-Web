import { AuthInstance } from './Axios';

export const Auth_KakaoLogin = async () => {
  const { data } = await AuthInstance.get(`/auth/kakao/authstate`);
  return data;
};

interface NewAccountParams {
  nickname: string;
  birthdate: string;
  gender: string;
}

export const Auth_NewAccount = async (params: NewAccountParams) => {
  const { data } = await AuthInstance.put(`/auth/newaccount`, params);
  return data;
};

interface SuveryParams {
  Q1: string;
  Q2: string;
  Q3: string;
  etc: string;
}

export const Auth_Survey = async (params: SuveryParams) => {
  const { data } = await AuthInstance.post(`/auth/survey`, {
    headers: {
      Q1: params.Q1,
      Q2: params.Q2,
      Q3: params.Q3,
      Qetc: params.etc
    }
  });
  return data;
};
