// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Hashingee from 'assets/image/Hashingee';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const history = useNavigate(); 

  return (
    <_.NotFound_Container>
      <Hashingee />
      <_.NotFound_Title>앗...!</_.NotFound_Title>
      <_.NotFound_Explain>
        알 수 없는 오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </_.NotFound_Explain>
      <_.NotFound_Button
        onClick={() => {
          history('/');
        }}
      >
        홈으로
      </_.NotFound_Button>
    </_.NotFound_Container>
  );
};

export default NotFound;
