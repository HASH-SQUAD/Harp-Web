// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import { message } from 'types/message';

const MessageBox = ({ role, message }: message) => {
  return <_.MessageBox_Container role={role}>{message}</_.MessageBox_Container>;
};

export default MessageBox;
