// 라이브러리
import React from 'react';
import { useRecoilState } from 'recoil';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import { tmiState } from 'atoms/user';
import { useNavigate } from 'react-router-dom';

const SurveryTMI = () => {
  const navigate = useNavigate();
  const [tmi, setTmi] = useRecoilState(tmiState);
  return (
    <_.SurveyTMI_Layout>
      <Header />
      <_.SurveyTMI_Container>
        <_.SurveyTMI_Title>
          <_.SurveyTMI_Title_Emoticon>🤔</_.SurveyTMI_Title_Emoticon>
          <_.SurveyTMI_Title_Big>당신에 대해 알려주세요!</_.SurveyTMI_Title_Big>
          <_.SurveyTMI_Title_Small>
            하프 서비스 이용을 위해 활용됩니다.
          </_.SurveyTMI_Title_Small>
        </_.SurveyTMI_Title>
        <_.SurveyTMI_Box>
          <_.SurveyTMI_Textarea
            onChange={(e) => {
              setTmi(e.currentTarget.value);
            }}
            maxLength={200}
            placeholder="ex) 고등어를 싫어해요"
          />
          <_.SurveyTMI_Text_Limit>{tmi.length}/200</_.SurveyTMI_Text_Limit>
        </_.SurveyTMI_Box>
      </_.SurveyTMI_Container>
      <NextButton
        text="다음"
        state={true}
        onNextClick={() => {
          navigate('/register/surveyend');
        }}
      />
    </_.SurveyTMI_Layout>
  );
};

export default SurveryTMI;
