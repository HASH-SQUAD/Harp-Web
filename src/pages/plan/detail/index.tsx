// 라이브러리
import React, { useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import PlanDetail from 'assets/image/PlanDetail.png';
import Camera from 'assets/Icon/Camera';
import calculateDDay from 'lib/utils/D-Day';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import { planInfos } from 'types/planInfos';

const Detail = () => {
  const statusBarHeight = useStatusBarHeight();
  const planInfos: planInfos = {
    image: PlanDetail,
    title: '가나다라마바사',
    date: '2024-08-08'
  };
  const [planDetailImage, setPlanDetailImage] = useState(planInfos.image);

  return (
    <_.Detail_Layout StatusBarSize={`${statusBarHeight}px`}>
      <Header title="일정" buttonState="닫기" />
      <_.Detail_Header BackgroundImage={planDetailImage}>
        <_.Detail_Title>{planInfos.title}</_.Detail_Title>
        <_.Detail_DDay>{calculateDDay(planInfos.date)}</_.Detail_DDay>
        <_.Detail_Camera
          onClick={() => {
            handleImageEdit(setPlanDetailImage);
          }}
        >
          <Camera />
        </_.Detail_Camera>
      </_.Detail_Header>
      <_.Detail_Content>
        <_.Detail_Nav>
          <_.Detail_Duration>
            24.08.08~24.08.09(1박 2일)
          </_.Detail_Duration>
          <_.Detail_Buttons>
            <_.Detail_Button>수정</_.Detail_Button>
            <_.Detail_Button>|</_.Detail_Button>
            <_.Detail_Button>삭제</_.Detail_Button>
          </_.Detail_Buttons>
        </_.Detail_Nav>
      </_.Detail_Content>
    </_.Detail_Layout>
  );
};

export default Detail;
