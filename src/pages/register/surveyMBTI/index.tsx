import React, { useState } from 'react';
import * as _ from './style';
import Header from 'components/Header';
import MBTI_Arrow from 'assets/image/MBTI_Arrow';
import NextButton from 'components/NextButton';

const SurveyMBTI = () => {
  const [mbtiStates, setMbtiStates] = useState([
    { id: 1, left: 'E', right: 'I', text: '내향형 / 외향형', state: false },
    { id: 2, left: 'S', right: 'N', text: '직관형 / 감각형', state: false },
    { id: 3, left: 'T', right: 'F', text: '사고형 / 감정형', state: false },
    { id: 4, left: 'P', right: 'J', text: '인식형 / 판단형', state: false }
  ]);

  const toggleState = (id: number, selectedState: boolean) => {
    setMbtiStates(
      mbtiStates.map((item) =>
        item.id === id ? { ...item, state: selectedState } : item
      )
    );
  };

  return (
    <_.SurveyMBTI_Container>
      <Header title="3" />
      <_.SurveyMBTI_Layout>
        <_.SurveyMBTI_ProgressText>3/3</_.SurveyMBTI_ProgressText>
        <_.SurveyMBTI_MainText>MBTI가 무엇인가요?</_.SurveyMBTI_MainText>
        <_.SurveyMBTI_SubText>
          <div>여행 계획을 짤 때 참고할게요 :-)</div>
          <div>건너뛰기</div>
        </_.SurveyMBTI_SubText>
        <_.SurveyMBTI_Contents>
          {mbtiStates.map((item) => (
            <_.SurveyMBTI_Contents_Select key={item.id}>
              <_.SurveyMBTI_Content
                State={!item.state}
                onClick={() => toggleState(item.id, false)}
              >
                {item.left}
              </_.SurveyMBTI_Content>
              <_.SurveyMBTI_Contents_Arrow>
                {item.text}
                <MBTI_Arrow />
              </_.SurveyMBTI_Contents_Arrow>
              <_.SurveyMBTI_Content
                State={item.state}
                onClick={() => toggleState(item.id, true)}
              >
                {item.right}
              </_.SurveyMBTI_Content>
            </_.SurveyMBTI_Contents_Select>
          ))}
        </_.SurveyMBTI_Contents>
      </_.SurveyMBTI_Layout>
      <NextButton text="다음" state={true} />
    </_.SurveyMBTI_Container>
  );
};

export default SurveyMBTI;
