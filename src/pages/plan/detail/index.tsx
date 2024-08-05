// 라이브러리
import React, { TextareaHTMLAttributes, useState } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';
import MiniMap from 'components/Maps/MiniMap';

const Detail = () => {
  const [memo, setMemo] = useState('');

  const updateMemoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.currentTarget.value);
  };

  return (
    <>
      <Header buttonState="수정" buttonColor="purple" />
      <_.Detail_Layout>
        <_.Detail_TitleBar>
          <_.Detail_DateAndTime>2023.11.29 오전 11:00</_.Detail_DateAndTime>
          <_.Detail_PlanTitle>쇼핑하기 🛍️</_.Detail_PlanTitle>
          <_.Detail_Location>
            <Location />
            <_.Detail_Address>
              부산광역시 기장군 기장해안로 147
            </_.Detail_Address>
          </_.Detail_Location>
        </_.Detail_TitleBar>
        <_.Detail_Content>
          <MiniMap keyword="부산광역시 기장군 기장해안로 147" />
          <_.Detail_Memo
            onChange={updateMemoContent}
            value={memo || ''}
            placeholder="메모를 입력하세요..."
          />
        </_.Detail_Content>
      </_.Detail_Layout>
    </>
  );
};

export default Detail;
