// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import PlanInfo from 'assets/image/PlanInfo.png';
import Camera from 'assets/Icon/Camera';
import calculateDDay from 'lib/utils/D-Day';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import { planInfos } from 'types/planInfos';
import KebabMenu from 'assets/Icon/KebabMenu';
import ControlModal from 'components/Modals/ControlModal';

const Info = () => {
  const statusBarHeight = useStatusBarHeight();
  const planInfos: planInfos = {
    image: PlanInfo,
    title: '가나다라마바사',
    date: '2024-08-08'
  };
  const [planInfoImage, setPlanInfoImage] = useState(planInfos.image);
  const [isModal, setIsModal] = useState(false);

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <_.Info_Layout StatusBarSize={`${statusBarHeight}px`}>
      <Header title="일정" buttonState="닫기" />
      <_.Info_Header BackgroundImage={planInfoImage}>
        <_.Info_Title>{planInfos.title}</_.Info_Title>
        <_.Info_DDay>{calculateDDay(planInfos.date)}</_.Info_DDay>
        <_.Info_Camera
          onClick={() => {
            handleImageEdit(setPlanInfoImage);
          }}
        >
          <Camera />
        </_.Info_Camera>
      </_.Info_Header>
      <_.Info_Content>
        <_.Info_Nav>
          <_.Info_Duration>24.08.08~24.08.09(1박 2일)</_.Info_Duration>
          <KebabMenu
            onClick={() => {
              setIsModal(true);
            }}
          />
          {isModal && <ControlModal onClose={handleCloseModal} />}
        </_.Info_Nav>
        <_.Info_DetailList>
          <_.Info_Times>
            <_.Info_WhatDay>1일차</_.Info_WhatDay>
            <_.Info_Date>23.11.29</_.Info_Date>
          </_.Info_Times>
          <_.Info_GoToMap>지도로 보기</_.Info_GoToMap>
        </_.Info_DetailList>
      </_.Info_Content>
    </_.Info_Layout>
  );
};

export default Info;
