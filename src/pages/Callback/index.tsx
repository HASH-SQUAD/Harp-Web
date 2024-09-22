import React, { useEffect } from 'react';
import * as _ from './style';
import { useNavigate } from 'react-router-dom';
import { Auth_KakaoLogin } from 'lib/apis/Auth';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('accessToken');
      const refreshToken = urlParams.get('refreshToken');

      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        try {
          const response = await Auth_KakaoLogin();
          console.log(response);
          if (response.data.newAccount === '1') navigate('/register/terms');
          else navigate('/');
        } catch (error) {
          alert('토큰 발급에 실패했습니다.');
          console.error('데이터 페칭 중 에러', error);
        }
      } else {
        navigate('/auth');
        alert('로그인에 실패했습니다.');
      }
    };

    fetchData();
  }, [navigate]);

  return <_.Callback_Layout>Loading...</_.Callback_Layout>;
};

export default Callback;
