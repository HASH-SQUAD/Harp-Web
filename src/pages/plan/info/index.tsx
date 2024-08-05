// 라이브러리
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
import DayPlan from 'components/DayPlan';
import { TripSchedule } from 'data/TripSchedule';
import Plus from 'assets/Icon/Plus';


const Info = () => {
  const statusBarHeight = useStatusBarHeight();
  const navigate = useNavigate();
  const location = useLocation();
  const [planInfoImage, setPlanInfoImage] = useState(PlanInfo);
  const [isModal, setIsModal] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (location.state?.croppedImage) {
      setPlanInfoImage(location.state.croppedImage);
    }
  }, [location.state]);

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleImageSelection = () => {
    handleImageEdit((selectedImage) => {
      navigate('/crop', { state: { imageSrc: selectedImage } });
    });
  };

  return (
    <_.Info_Layout StatusBarSize={`${statusBarHeight}px`}>
      <Header title="일정" buttonState="닫기" />
      <_.Info_Header BackgroundImage={planInfoImage}>
        <_.Info_Title>가나다라마바사</_.Info_Title>
        <_.Info_DDay>{calculateDDay('2024-08-08')}</_.Info_DDay>
        <_.Info_Camera onClick={handleImageSelection}>
          <Camera />
        </_.Info_Camera>
      </_.Info_Header>
      <_.Info_Content>
        <_.Info_Nav>
          <_.Info_Duration>24.08.08~24.08.09(1박 2일)</_.Info_Duration>
          <KebabMenu onClick={() => setIsModal(true)} />
          {isModal && <ControlModal onClose={handleCloseModal} />}
        </_.Info_Nav>
        <_.Info_Schedule>
          <_.Info_GoToMap>지도로 보기</_.Info_GoToMap>
          <_.Info_DetailList>
            {TripSchedule.map((day, index) => {
              const lineHeight = 75 + 115 * (day.length - 1);
              return (
                <_.Info_Date key={index}>
                  <_.Info_Line height={lineHeight} />
                  <DayPlan isUpdated={isUpdated} key={index} day={day} dayIndex={index + 1} />
                </_.Info_Date>
              );
            })}
          </_.Info_DetailList>
        </_.Info_Schedule>
      </_.Info_Content>
      <_.Info_Add_Schedule>
        <Plus />
      </_.Info_Add_Schedule>
    </_.Info_Layout>
  );
};

export default Info;
