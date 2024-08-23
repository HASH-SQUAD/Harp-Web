import React, { useEffect, useState } from 'react';
import * as _ from './style';
import Header from 'components/Header';
import PlanDate from 'components/PlanDate';
import WriteIcon from 'assets/image/writeIcon';
import Location from 'assets/image/Location';
import Calendar from 'assets/image/Calendar';
import TimeCircle from 'assets/image/TimeCircle';
import { hasDateExpired } from 'lib/utils/hasDateExpired';
import TimePicker from 'components/TimePicker';
import NextButton from 'components/NextButton';

const AddDetail = () => {
  const [nextButtonState, setNextButtonState] = useState(false);
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [time, setTime] = useState({
    period: '오전',
    hour: '1',
    minute: '00'
  });

  const periods = ['오전', '오후'];
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
  );

  const plans = [
    { day: 'day1', date: '2024-08-06' },
    { day: 'day2', date: '2024-11-26' },
    { day: 'day3', date: '2024-11-27' },
    { day: 'day4', date: '2024-11-28' },
    { day: 'day5', date: '2024-11-29' }
  ];

  const handleSelectDay = (index: number, date: string) => {
    if (!hasDateExpired(date)) {
      setIsSelected(index);
    }
  };

  useEffect(() => {
    if (plans.length === 1) {
      setIsSelected(0);
    }
  }, [plans]);

  return (
    <>
      <Header title="일정추가"/>
      <_.AddDetail_Layout>
        <_.AddDetail_TitleBar>
          <_.AddDetail_Location>
            <Location />
            <_.AddDetail_Address>
              부산광역시 기장군 기장해안로 147
            </_.AddDetail_Address>
          </_.AddDetail_Location>
          <_.AddDetail_PlanTitle>쇼핑하기 🛍️</_.AddDetail_PlanTitle>
        </_.AddDetail_TitleBar>
          <_.AddDetail_Subtitle>
            <WriteIcon />
            <_.AddDetail_Menu>일정 제목</_.AddDetail_Menu>
          </_.AddDetail_Subtitle>
        <_.AddDetail_SelectDate>
          <_.AddDetail_Subtitle>
            <Calendar />
            <_.AddDetail_Menu>날짜 선택</_.AddDetail_Menu>
          </_.AddDetail_Subtitle>
          <_.AddDetail_PlanDates>
            {plans.map((plan, index) => (
              <PlanDate
                key={plan.day}
                day={index + 1}
                date={plan.date}
                isSelected={isSelected === index}
                onSelect={() => {
                  handleSelectDay(index, plan.date);
                }}
              />
            ))}
          </_.AddDetail_PlanDates>
        </_.AddDetail_SelectDate>
        <_.AddDetail_SelectTime>
          <_.AddDetail_Subtitle>
            <TimeCircle />
            <_.AddDetail_Menu>시간 선택</_.AddDetail_Menu>
          </_.AddDetail_Subtitle>
          <_.AddDetail_TimePickerList>
            <TimePicker
              list={periods}
              onSelectedChange={(selectedPeriod: string) =>
                setTime((prev) => ({ ...prev, period: selectedPeriod }))
              }
            />
            <TimePicker
              list={hours}
              onSelectedChange={(selectedHour: string) =>
                setTime((prev) => ({ ...prev, hour: selectedHour }))
              }
            />
            <TimePicker
              list={minutes}
              onSelectedChange={(selectedMinute: string) =>
                setTime((prev) => ({ ...prev, minute: selectedMinute }))
              }
            />
            <_.AddDetail_Overlay />
          </_.AddDetail_TimePickerList>
        </_.AddDetail_SelectTime>
        <NextButton text="완료" state={nextButtonState}/>
      </_.AddDetail_Layout>
    </>
  );
};

export default AddDetail;
