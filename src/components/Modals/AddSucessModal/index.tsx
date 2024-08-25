// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import DangerCircle from 'assets/image/DangerCircle';

const AddSucessModal = () => {
  return (
    <_.AddSucessModal_Layout>
      <DangerCircle />
      <_.AddSucessModal_Message>
        일정이 성공적으로 추가되었습니다.
      </_.AddSucessModal_Message>
    </_.AddSucessModal_Layout>
  );
};

export default AddSucessModal;
