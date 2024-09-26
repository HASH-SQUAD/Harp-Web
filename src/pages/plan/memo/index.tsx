// 라이브러리
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';
import MiniMap from 'components/Maps/MiniMap';
import { useMutation } from 'react-query';
import { Plan_Update } from 'lib/apis/Plan';

const Memo = () => {
  const { id, day, time } = useParams();
  const location = useLocation();
  const { planInfos } = location.state;
  const [memo, setMemo] = useState('');

  useEffect(() => {
    const initialMemo = planInfos?.data[`day${parseInt(day!) + 1}`]?.find(
      (_: any, index: number) => index === parseInt(time!)
    )?.memo;

    if (initialMemo) {
      setMemo(initialMemo);
    }
  }, [day, time, planInfos]);

  const updateMemoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.currentTarget.value);
  };

  const selectedPlan = planInfos?.data[`day${parseInt(day!) + 1}`]?.map(
    (plan: any, index: number) => {
      if (index === parseInt(time!)) {
        return { ...plan, memo: memo };
      }
      return plan;
    }
  );

  const { mutate: updateMemo } = useMutation(
    () =>
      Plan_Update({
        id: id!,
        data: {
          ...planInfos,
          data: {
            ...planInfos.data,
            [`day${parseInt(day!) + 1}`]: selectedPlan
          }
        }
      }),
    {
      onError: (error) => {
        console.log('메모 추가 실패', error);
      }
    }
  );

  const handleUpdateMemo = async () => {
    await updateMemo();
  };

  return (
    <_.Memo_Layout>
      <Header
        buttonState="수정"
        buttonColor="purple"
        onTapBackIcon={handleUpdateMemo}
      />
      <_.Memo_Container>
        <_.Memo_TitleBar>
          <_.Memo_DateAndTime>2023.11.29 오전 11:00</_.Memo_DateAndTime>
          <_.Memo_PlanTitle>쇼핑하기 🛍️</_.Memo_PlanTitle>
          <_.Memo_Location>
            <Location />
            <_.Memo_Address>부산광역시 기장군 기장해안로 147</_.Memo_Address>
          </_.Memo_Location>
        </_.Memo_TitleBar>
        <_.Memo_Content>
          <MiniMap keyword="부산광역시 기장군 기장해안로 147" />
          <_.Memo_Memo
            onChange={updateMemoContent}
            value={memo || ''}
            placeholder="메모를 입력하세요..."
          />
        </_.Memo_Content>
      </_.Memo_Container>
    </_.Memo_Layout>
  );
};

export default Memo;
