// 라이브러리
import React, { useState, useEffect } from 'react';

// 파일
import * as _ from './style';
import Search from 'assets/image/Search';
import MenuBar from 'components/MenuBar';
import calculateDDay from 'lib/utils/D-Day';
import RightArrow from 'assets/Icon/RightArrow';
import { theme } from 'lib/utils/style/theme';
import Robot from 'assets/image/Robot.png';
import { PlanResult, RecommendedPlanResult } from 'types/plan';
import { useQuery } from 'react-query';
import { Plan_RecommendedPlanList, Plan_UserPlanList } from 'lib/apis/Plan';
import { useNavigate } from 'react-router-dom';

interface DateData {
  id: number;
  day: string;
  date: number;
  state: boolean;
}

const Home = () => {
  const navigate = useNavigate();
  const [date, setData] = useState<DateData[]>([]);
  const [userPlans, setUserPlans] = useState<PlanResult[] | null>(null);
  const [recommendedPlans, setRecommendedPlans] = useState<
    RecommendedPlanResult[] | null
  >(null);

  const { isLoading: UserPlansLoading } = useQuery(
    ['userPlans'],
    Plan_UserPlanList,
    {
      onSuccess: (response: { data: { PlanData: PlanResult[] } }) => {
        const sortedPlans = response.data.PlanData?.sort(
          (a: { startDate: string }, b: { startDate: string }) => {
            return (
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            );
          }
        );
        setUserPlans(sortedPlans);
      }
    }
  );

  const { isLoading: RecommendedPlansLoading } = useQuery(
    ['recommendedPlans'],
    Plan_RecommendedPlanList,
    {
      onSuccess: (response: {
        data: { PlanData: RecommendedPlanResult[] };
      }) => {
        setRecommendedPlans(response.data.PlanData);
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
              {/* <_.Home_Calendar_Content_Point /> */}
            </_.Home_Calendar_Content_Date>
          </_.Home_Calendar_Content>
        ))}
      </_.Home_Calendar>

      <_.Home_SearchBar>
        <Search />
        <_.Home_SearchBar_Input placeholder="목적지를 입력해보세요." />
      </_.Home_SearchBar>
      <_.Home_Navigate_Chatting
        onClick={() => {
          navigate('/plan/selectdate');
        }}
      >
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
        {UserPlansLoading ? (
          <_.Home_ErrorOrNothing>불러오는 중...</_.Home_ErrorOrNothing>
        ) : userPlans && userPlans.length > 0 ? (
          userPlans.map((plan) => (
            <_.Home_Plan_Content
              key={plan.planId}
              onClick={() => {
                navigate(`/plan/info/${plan.planId}`);
              }}
            >
              <_.Home_Plan_Content_Title>
                {plan.planName}
              </_.Home_Plan_Content_Title>
              <_.Home_Plan_Content_Date_Content>
                <_.Home_Plan_Content_Date>
                  {calculateDDay(plan.startDate)}
                </_.Home_Plan_Content_Date>
              </_.Home_Plan_Content_Date_Content>
            </_.Home_Plan_Content>
          ))
        ) : (
          <_.Home_ErrorOrNothing>
            현재 등록된 일정이 없습니다.
          </_.Home_ErrorOrNothing>
        )}
      </_.Home_Plan_Contents>

      <_.Home_RecommendPlan_Title>
        이번 여행 여기 어때요? 😉
      </_.Home_RecommendPlan_Title>
      <_.Home_RecommendPlan_Contents>
        {RecommendedPlansLoading ? (
          <_.Home_ErrorOrNothing>불러오는 중...</_.Home_ErrorOrNothing>
        ) : recommendedPlans && recommendedPlans.length > 0 ? (
          recommendedPlans.map((plan) => (
            <_.Home_RecommendPlan_Content
              key={plan.RecommendedPlanId}
              imgUrl={plan.mainImg}
            >
              <_.Home_RecommendPlan_Content_Title>
                {plan.title}
              </_.Home_RecommendPlan_Content_Title>
            </_.Home_RecommendPlan_Content>
          ))
        ) : (
          <_.Home_ErrorOrNothing>
            현재 등록된 추천 일정이 없습니다.
          </_.Home_ErrorOrNothing>
        )}
      </_.Home_RecommendPlan_Contents>

      <MenuBar selectState={1} />
    </_.Home_Container>
  );
};

export default Home;
