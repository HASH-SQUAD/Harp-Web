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

const Detail = () => {
  const statusBarHeight = useStatusBarHeight();
  const planInfos = {
    image: PlanDetail,
    title: '가나다라마바사',
    date: '2024-08-08'
  };
  const [planDetailImage, setPlanDetailImage] = useState(planInfos.image);

  return (
    <_.PlanDetail_Layout StatusBarSize={`${statusBarHeight}px`}>
      <Header title="일정" buttonState="닫기" />
      <_.PlanDetail_Header BackgroundImage={planDetailImage}>
        <_.PlanDetail_Title>{planInfos.title}</_.PlanDetail_Title>
        <_.PlanDetail_DDay>{calculateDDay(planInfos.date)}</_.PlanDetail_DDay>
        <_.PlanDetail_Camera
          onClick={() => {
            handleImageEdit(setPlanDetailImage);
          }}
        >
          <Camera />
        </_.PlanDetail_Camera>
      </_.PlanDetail_Header>
    </_.PlanDetail_Layout>
  );
};

export default Detail;
