// 라이브러리
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Camera from 'assets/Icon/Camera';
import calculateDDay from 'lib/utils/D-Day';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import KebabMenu from 'assets/Icon/KebabMenu';
import ControlModal from 'components/Modals/ControlModal';
import DayPlan from 'components/DayPlan';
import Plus from 'assets/Icon/Plus';
import AddSucessModal from 'components/Modals/AddSucessModal';
import { Plan_Result } from 'lib/apis/Plan';
import { PlanResult } from 'types/plan';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';

const Info = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const location = useLocation();
  const [planInfos, setPlanInfos] = useState<PlanResult | null>(null);
  const [isModal, setIsModal] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const { isLoading } = useQuery(
    ['planResult', id],
    () => Plan_Result({ id }),
    {
      onSuccess: (response) => {
        if (response?.data?.PlanData) {
          setPlanInfos(response.data.PlanData);
        }
      },
      onError: (error) => {
        console.error('Error fetching plan result: ', error);
        setIsSuccess(false);
      }
    }
  );

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleImageSelection = () => {
    handleImageEdit((selectedImage) => {
      const id = 1;
      console.log('Selected Image: ', selectedImage);
      navigate(`/plan/info/${id}/crop`, { state: { imageSrc: selectedImage } });
    });
  };

  const formatTravelPeriod = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return '';

    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    if (dayDiff === 0) {
      return '당일치기';
    } else {
      return `${dayDiff}박 ${dayDiff + 1}일`;
    }
  };

  const startDate = planInfos?.startDate ?? null;
  const endDate = planInfos?.endDate ?? null;

  const formattedStartDate = formatSelectedDate(startDate, '.');
  const formattedEndDate = formatSelectedDate(endDate, '.');
  const travelPeriod = formatTravelPeriod(startDate ?? '', endDate ?? '');

  const duration = `${formattedStartDate}~${formattedEndDate} (${travelPeriod})`;

  return (
    <>
      <Header title="일정" buttonState="닫기" />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <_.Info_Layout>
          <_.Info_Header $BackgroundImage={planInfos?.mainImg ?? ''}>
            <_.Info_Title>{planInfos?.planName}</_.Info_Title>
            <_.Info_DDay>{calculateDDay(startDate ?? undefined)}</_.Info_DDay>
            <_.Info_Camera onClick={handleImageSelection}>
              <Camera />
            </_.Info_Camera>
          </_.Info_Header>
          <_.Info_Content>
            <_.Info_Nav>
              <_.Info_Duration>{duration}</_.Info_Duration>
              <KebabMenu onClick={() => setIsModal(true)} />
              {isModal && <ControlModal onClose={handleCloseModal} />}
            </_.Info_Nav>
            <_.Info_Schedule>
              <_.Info_GoToMap>지도로 보기</_.Info_GoToMap>
              <_.Info_DetailList>
                {Object.keys(planInfos?.data || {}).map(
                  (dayKey: string, index: number) => {
                    const day =
                      dayKey === 'tips'
                        ? null
                        : planInfos?.data[
                            dayKey as keyof typeof planInfos.data
                          ];

                    if (!Array.isArray(day)) {
                      return null;
                    }
                    const lineHeight = 80 + 108 * (day.length - 1);
                    return (
                      <_.Info_Date key={index}>
                        <_.Info_Line height={lineHeight} />
                        <DayPlan
                          isUpdated={isUpdated}
                          key={index}
                          day={day}
                          dayIndex={index + 1}
                        />
                      </_.Info_Date>
                    );
                  }
                )}
              </_.Info_DetailList>
            </_.Info_Schedule>
          </_.Info_Content>
          <_.Info_Add_Schedule>
            <Plus />
          </_.Info_Add_Schedule>
          {isSuccess && <AddSucessModal />}
        </_.Info_Layout>
      )}
    </>
  );
};

export default Info;
