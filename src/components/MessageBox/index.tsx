// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import { message } from 'types/message';
import Loading from 'components/Loading';

const MessageBox = ({ role, message: msg, isLoading }: message) => {
  return (
    <_.MessageBox_Container role={role}>
      {isLoading ? <Loading /> : msg}
    </_.MessageBox_Container>
  );
};

export default MessageBox;
