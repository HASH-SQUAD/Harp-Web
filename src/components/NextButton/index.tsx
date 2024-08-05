// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';

interface NextButtonProps {
  text: string;
  state: boolean;
  onClick?: () => void;
}

const NextButton = ({ text, state, onClick }: NextButtonProps) => {
  return (
    <_.NextButton_Container State={state} onClick={onClick}>
      <_.NextButton_Title>{text}</_.NextButton_Title>
    </_.NextButton_Container>
  );
};

export default NextButton;
