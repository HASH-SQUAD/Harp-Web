// 라이브러리
import React, { useState } from 'react';
// 파일
import * as _ from './style';

// interface BirthdayProps {
//   handleOutsideClick: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Birthday = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  console.log(selectedDate, setSelectedDate);

  return (
    <_.Birthday_Container>
      <_.Birthday_Layout>
        <_.Birthday_Title>생년월일</_.Birthday_Title>
        <_.Birthday_Calendar></_.Birthday_Calendar>
        <_.Birthday_Button>확인</_.Birthday_Button>
      </_.Birthday_Layout>
    </_.Birthday_Container>
  );
};

export default Birthday;
