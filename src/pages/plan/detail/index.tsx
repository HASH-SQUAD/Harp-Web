// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';

const Detail = () => {
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
      </_.Detail_Layout>
    </>
  );
};

export default Detail;
