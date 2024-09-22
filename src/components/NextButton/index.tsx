// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';

interface NextButtonProps {
  text: string;
  state: boolean;
  onNextClick?: () => void;
}

const NextButton = ({ text, state, onNextClick }: NextButtonProps) => {
  return (
    <_.NextButton_Container
      State={state}
      onClick={() => {
        if (state && onNextClick) {
          onNextClick();
        }
      }}
    >
      <_.NextButton_Title>{text}</_.NextButton_Title>
    </_.NextButton_Container>
  );
};

export default NextButton;
