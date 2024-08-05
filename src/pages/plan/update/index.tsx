// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';
import Calendar from 'assets/image/Calendar';
import PlanDate from 'components/PlanDate';

const Update = () => {
  return (
    <>
      <Header title="수정" buttonState="완료" />
      <_.Update_Layout>
        <_.Update_TitleBar>
          <_.Update_Location>
            <Location />
            <_.Update_Address>
              부산광역시 기장군 기장해안로 147
            </_.Update_Address>
          </_.Update_Location>
          <_.Update_PlanTitle>쇼핑하기 🛍️</_.Update_PlanTitle>
        </_.Update_TitleBar>
        <_.Update_SelectDate>
          <_.Update_Subtitle>
            <Calendar />
            <_.Update_Menu>날짜 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_PlanDates>
            <PlanDate />
          </_.Update_PlanDates>
        </_.Update_SelectDate>
      </_.Update_Layout>
    </>
  );
};

export default Update;
