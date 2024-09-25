// 라이브러리
import React, { useState, useEffect } from 'react';

// 파일
import * as _ from './style';
import Search from 'assets/image/Search';
import RecommendPlan from 'data/RecommendPlan';
import MenuBar from 'components/MenuBar';
import calculateDDay from 'lib/utils/D-Day';
import RightArrow from 'assets/Icon/RightArrow';
import { theme } from 'lib/utils/style/theme';
import Robot from 'assets/image/Robot.png';
import { PlanResult } from 'types/plan';
import { useQuery } from 'react-query';
import { Plan_List } from 'lib/apis/Plan';

interface DateData {
  id: number;
  day: string;
  date: number;
  state: boolean;
}

const Home = () => {
  const [date, setData] = useState<DateData[]>([]);
  const [plans, setPlans] = useState<PlanResult[] | null>(null);

  const { isLoading: GetUserPlansLoading } = useQuery(
    ['userPlans'],
    Plan_List,
    {
      onSuccess: (response) => {
        setPlans(response.data.PlanData);
        console.log(response.data);
      }
    }
  );

  useEffect(() => {
    const today = new Date();
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const dates = Array.from({ length: 7 }, (_, i) => {
      const newDate = new Date();
      newDate.setDate(today.getDate() + i - 3);

      return {
        id: newDate.getTime(),
        day: daysOfWeek[newDate.getDay()],
        date: newDate.getDate(),
        state: i === 3
      };
    });

    setData(dates);
  }, []);

  return (
    <_.Home_Container>
      <_.Home_Calendar>
        {date.map((day) => (
          <_.Home_Calendar_Content key={day.id}>
            <_.Home_Calendar_Content_Day State={day.state}>
              {day.day}
            </_.Home_Calendar_Content_Day>
            <_.Home_Calendar_Content_Date>
              {day.date}
              <_.Home_Calendar_Content_Point />
            </_.Home_Calendar_Content_Date>
          </_.Home_Calendar_Content>
        ))}
      </_.Home_Calendar>

      <_.Home_SearchBar>
        <Search />
        <_.Home_SearchBar_Input placeholder="목적지를 입력해보세요." />
      </_.Home_SearchBar>
      <_.Home_Navigate_Chatting>
        <_.Home_Navigate_Ul>
          <_.Home_Navigate_List>AI로 계획</_.Home_Navigate_List>
          <_.Home_Navigate_List>
            만들기
            <RightArrow width="28" height="28" color={theme.gray.white} />
          </_.Home_Navigate_List>
        </_.Home_Navigate_Ul>
        <_.Home_Navigate_Robot src={Robot} />
      </_.Home_Navigate_Chatting>

      <_.Home_Plan_Title>다가오는 일정이 있어요! ✈️</_.Home_Plan_Title>
      <_.Home_Plan_Contents>
        {GetUserPlansLoading ? (
          <p>불러오는 중...</p>
        ) : (
          plans?.map((item) => (
            <_.Home_Plan_Content key={item.planId}>
              <_.Home_Plan_Content_Title>
                {item.planName}
              </_.Home_Plan_Content_Title>
              <_.Home_Plan_Content_Date_Content>
                <_.Home_Plan_Content_Date>
                  {calculateDDay(item.startDate)}
                </_.Home_Plan_Content_Date>
              </_.Home_Plan_Content_Date_Content>
            </_.Home_Plan_Content>
          ))
        )}
      </_.Home_Plan_Contents>

      <_.Home_RecommendPlan_Title>
        이번 여행 여기 어때요? 😉
      </_.Home_RecommendPlan_Title>
      <_.Home_RecommendPlan_Contents>
        {RecommendPlan.map((item) => (
          <_.Home_RecommendPlan_Content key={item.id} imgUrl={item.img}>
            <_.Home_RecommendPlan_Content_Title>
              {item.title}
            </_.Home_RecommendPlan_Content_Title>
          </_.Home_RecommendPlan_Content>
        ))}
      </_.Home_RecommendPlan_Contents>

      <MenuBar selectState={1} />
    </_.Home_Container>
  );
};

export default Home;
