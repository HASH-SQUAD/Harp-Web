// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';

interface BirthdayProps {
  handleOutsideClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Birthday = ({ handleOutsideClick }: BirthdayProps) => {
  return (
    <_.BirthdayModal_Container
      onClick={() => {
        handleOutsideClick(false);
      }}
    ></_.BirthdayModal_Container>
  );
};

export default Birthday;
