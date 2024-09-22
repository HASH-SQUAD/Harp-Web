// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Loading from 'components/Loading';

type message = {
  role: string;
  message: string;
  isLoading: boolean;
  children?: React.ReactNode;
};

const MessageBox = ({ role, message: msg, isLoading }: message) => {
  return (
    <_.MessageBox_Container role={role}>
      {isLoading ? <Loading /> : msg}
    </_.MessageBox_Container>
  );
};

export default MessageBox;
