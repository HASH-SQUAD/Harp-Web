// 라이브러리
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import MBTI_Arrow from 'assets/image/MBTI_Arrow';
import NextButton from 'components/NextButton';
import { selectedMBTIState, stringMbtiState } from 'atoms/user';
import { useNavigate } from 'react-router-dom';

const SurveyMBTI = () => {
  const navigate = useNavigate();
  const [selectedMbti, setSelectedMbti] = useRecoilState(selectedMBTIState);
  const [, setStringMbti] = useRecoilState(stringMbtiState);

  const toggleState = useCallback(
    (id: number, selectedState: boolean) => {
      const updatedMbti = selectedMbti.mbti.map((item) =>
        item.id === id ? { ...item, state: selectedState } : item
      );
      setSelectedMbti((prev) => ({ ...prev, mbti: updatedMbti }));

      const mbtiString = updatedMbti
        .map((item) => (item.state ? item.right : item.left))
        .join('');

      setStringMbti(mbtiString);
    },
    [selectedMbti, setSelectedMbti, setStringMbti]
  );

  const handleSkip = () => {
    setStringMbti('');
    navigate('/register/surveytmi');
  };

  return (
    <_.SurveyMBTI_Container>
      <Header title="3" />
      <_.SurveyMBTI_Layout>
        <_.SurveyMBTI_ProgressText>3/3</_.SurveyMBTI_ProgressText>
        <_.SurveyMBTI_MainText>MBTI가 무엇인가요?</_.SurveyMBTI_MainText>
        <_.SurveyMBTI_SubText>
          <div>여행 계획을 짤 때 참고할게요 :-)</div>
          <div onClick={handleSkip}>건너뛰기</div>
        </_.SurveyMBTI_SubText>
        <_.SurveyMBTI_Contents>
          {selectedMbti.mbti.map((item) => (
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
      <NextButton
        text="다음"
        state={true}
        onNextClick={() => {
          navigate('/register/surveytmi');
        }}
      />
    </_.SurveyMBTI_Container>
  );
};

export default SurveyMBTI;
