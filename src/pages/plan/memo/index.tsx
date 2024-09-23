// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';
import MiniMap from 'components/Maps/MiniMap';

const Memo = () => {
  const [memo, setMemo] = useState('');

  const updateMemoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.currentTarget.value);
  };

  return (
    <_.Memo_Layout>
      <Header buttonState="수정" buttonColor="purple" />
      <_.Memo_Container>
        <_.Memo_TitleBar>
          <_.Memo_DateAndTime>2023.11.29 오전 11:00</_.Memo_DateAndTime>
          <_.Memo_PlanTitle>쇼핑하기 🛍️</_.Memo_PlanTitle>
          <_.Memo_Location>
            <Location />
            <_.Memo_Address>부산광역시 기장군 기장해안로 147</_.Memo_Address>
          </_.Memo_Location>
        </_.Memo_TitleBar>
        <_.Memo_Content>
          <MiniMap keyword="부산광역시 기장군 기장해안로 147" />
          <_.Memo_Memo
            onChange={updateMemoContent}
            value={memo || ''}
            placeholder="메모를 입력하세요..."
          />
        </_.Memo_Content>
      </_.Memo_Container>
    </_.Memo_Layout>
  );
};

export default Memo;
