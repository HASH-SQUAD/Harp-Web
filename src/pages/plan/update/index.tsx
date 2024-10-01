// 라이브러리
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import PlanDate from 'components/PlanDate';
import Location from 'assets/image/Location';
import Calendar from 'assets/image/Calendar';
import TimeCircle from 'assets/image/TimeCircle';
import { hasDateExpired } from 'lib/utils/hasDateExpired';
import TimePicker from 'components/TimePicker';
import { useMutation } from 'react-query';
import { Plan_Update } from 'lib/apis/Plan';
import Write from 'assets/image/Write';

const Update = () => {
  const navigate = useNavigate();
  const { id, dayIndex, timeIndex } = useParams();
  const location = useLocation();
  const { planInfos } = location.state;
  const [planItem, setPlanItem] = useState(
    planInfos?.data[`day${parseInt(dayIndex!) + 1}`]?.find(
      (_: any, index: number) => index === parseInt(timeIndex!)
    )
  );
  const [isSelected, setIsSelected] = useState<number | null>(
    parseInt(dayIndex!)
  );
  const [inputValue, setInputValue] = useState(planItem.activity);

  const [time, setTime] = useState({
    period: '',
    hour: '',
    minute: ''
  });

  const periods = ['오전', '오후'];
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
  );

  const startDate = new Date(planInfos.startDate);
  const plans = Object.keys(planInfos?.data)
    .filter((key) => key !== 'tips')
    .map((key, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      return {
        day: key,
        date: date.toISOString().split('T')[0]
      };
    });

  const handleSelectDay = (index: number, date: string) => {
    if (!hasDateExpired(date)) {
      setIsSelected(index);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const { mutate: updatedPlanItemMutation } = useMutation(Plan_Update, {
    onSuccess: () => {
      alert('수정 성공!');
      navigate(`/plan/info/${id}`);
    },
    onError: (error) => {
      console.error('일정 아이템 수정 실패', error);
    }
  });

  const handleUpdatePlan = () => {
    const selectedDay = `day${isSelected! + 1}`;
    const oldDay = `day${parseInt(dayIndex!) + 1}`;

    const isSameDay = selectedDay === oldDay;

    const newPlanItem = {
      ...planItem,
      activity: inputValue,
      time: `${time.hour}:${time.minute}`
    };

    let updatedPlans;

    if (isSameDay) {
      updatedPlans = {
        ...planInfos,
        data: {
          ...planInfos.data,
          [selectedDay]:
            planInfos.data[selectedDay]?.map((plan: any, index: number) =>
              index === parseInt(timeIndex!) ? newPlanItem : plan
            ) || []
        }
      };
    } else {
      if (!planInfos.data[oldDay] || !planInfos.data[selectedDay]) {
        console.error('해당 날짜에 데이터가 없습니다.');
        return;
      }

      updatedPlans = {
        ...planInfos,
        data: {
          ...planInfos.data,
          [oldDay]: planInfos.data[oldDay].filter(
            (_: any, index: number) => index !== parseInt(timeIndex!)
          ),
          [selectedDay]: [...planInfos.data[selectedDay], newPlanItem]
        }
      };
    }

    updatedPlanItemMutation({ id: id!, data: updatedPlans });
  };

  useEffect(() => {
    if (plans.length === 1) {
      setIsSelected(0);
    }
  }, [plans]);

  useEffect(() => {
    if (planItem) {
      const [hour, minute] = planItem.time.split(':');
      const period = parseInt(hour) < 12 ? '오전' : '오후';
      setTime({
        period,
        hour: String(parseInt(hour) % 12 || 12),
        minute
      });
    }
  }, []);

  useEffect(() => {
    if (planItem && time.period && time.hour && time.minute) {
      const updatedHour =
        time.period === '오전'
          ? String(time.hour === '12' ? 0 : time.hour).padStart(2, '0')
          : String(time.hour === '12' ? 12 : parseInt(time.hour) + 12);

      const formattedTime = `${updatedHour}:${time.minute}`;
      setPlanItem({
        ...planItem,
        time: formattedTime
      });
    }
  }, [time]);

  return (
    <>
      <Header
        title="수정"
        buttonState="완료"
        onClickMethod={handleUpdatePlan}
      />
      <_.Update_Container>
        <_.Update_Location>
          <Location />
          <_.Update_Address>
            {planItem?.location
              ? planItem.location
              : '위치가 존재하지 않습니다.'}
            <_.Update_PlanChange>변경</_.Update_PlanChange>
          </_.Update_Address>
        </_.Update_Location>
        <_.Update_SectionLine>
          <_.Update_Subtitle>
            <Write />
            <_.Update_Menu>일정 제목</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_Input
            placeholder="일정 제목을 입력하세요! ex) 밥먹기"
            value={inputValue}
            onChange={handleInputChange}
          />
        </_.Update_SectionLine>
        <_.Update_SelectDate>
          <_.Update_Subtitle>
            <Calendar />
            <_.Update_Menu>날짜 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_PlanDates>
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
          </_.Update_PlanDates>
        </_.Update_SelectDate>
        <_.Update_SelectTime>
          <_.Update_Subtitle>
            <TimeCircle />
            <_.Update_Menu>시간 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_TimePickerList>
            <TimePicker
              list={periods}
              onSelectedChange={(selectedPeriod: string) =>
                setTime((prev) => ({ ...prev, period: selectedPeriod }))
              }
              selectedValue={time.period}
            />
            <TimePicker
              list={hours}
              onSelectedChange={(selectedHour: string) =>
                setTime((prev) => ({ ...prev, hour: selectedHour }))
              }
              selectedValue={time.hour}
            />
            <TimePicker
              list={minutes}
              onSelectedChange={(selectedMinute: string) =>
                setTime((prev) => ({ ...prev, minute: selectedMinute }))
              }
              selectedValue={time.minute}
            />

            <_.Update_Overlay />
          </_.Update_TimePickerList>
        </_.Update_SelectTime>
      </_.Update_Container>
    </>
  );
};

export default Update;
