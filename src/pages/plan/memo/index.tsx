// 라이브러리
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Location from 'assets/image/Location';
import MiniMap from 'components/Maps/MiniMap';
import { Plan_Update } from 'lib/apis/Plan';
import { formatTime } from 'lib/utils/formatTime';

const Memo = () => {
  const { id, dayIndex, timeIndex } = useParams();
  const location = useLocation();
  const { planInfos, date } = location.state;
  const [contents, setContents] = useState({
    time: '',
    activity: '',
    location: ''
  });
  const [memo, setMemo] = useState('');

  useEffect(() => {
    const data = planInfos?.data[`day${parseInt(dayIndex!) + 1}`]?.find(
      (_: any, index: number) => index === parseInt(timeIndex!)
    );
    console.log(data);

    if (data) {
      setMemo(data.memo);
      setContents({
        time: formatTime(data.time),
        activity: data.activity,
        location: data.location
      });
    }
  }, [dayIndex, timeIndex, planInfos]);

  const updateMemoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.currentTarget.value);
  };

  const selectedPlan = planInfos?.data[`day${parseInt(dayIndex!) + 1}`]?.map(
    (plan: any, index: number) => {
      if (index === parseInt(timeIndex!)) {
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
            [`day${parseInt(dayIndex!) + 1}`]: selectedPlan
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
          <_.Memo_DateAndTime>
            {date} {contents.time}
          </_.Memo_DateAndTime>
          <_.Memo_PlanTitle>{contents.activity}</_.Memo_PlanTitle>
          <_.Memo_Location>
            <Location />
            <_.Memo_Address>{contents.location}</_.Memo_Address>
          </_.Memo_Location>
        </_.Memo_TitleBar>
        <_.Memo_Content>
          <MiniMap keyword={contents.location} />
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
