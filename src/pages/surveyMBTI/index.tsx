//라이브러리
import React, { useState } from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import MBTI_Arrow from 'assets/image/MBTI_Arrow';
import NextButton from 'components/NextButton';

const SurveyMBTI = () => {
  const statusBarHeight = useStatusBarHeight();

  const [State1, setState1] = useState(false);
  const [State2, setState2] = useState(false);
  const [State3, setState3] = useState(false);
  const [State4, setState4] = useState(false);

  return (
    <_.SurveyMBTI_Container>
      <_.SurveyMBTI_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          title=""
          StatusBar={3}
          buttonState=""
          onClickMethod={() => {
            return;
          }}
        />

        <_.SurveyMBTI_ProgressText>3/3</_.SurveyMBTI_ProgressText>

        <_.SurveyMBTI_MainText>MBTI가 무엇인가요?</_.SurveyMBTI_MainText>

        <_.SurveyMBTI_SubText>
          <div>여행 계획을 짤 때 참고할게요 :-)</div>

          <div>건너뛰기</div>
        </_.SurveyMBTI_SubText>

        <_.SurveyMBTI_Contents>
          <_.SurveyMBTI_Contents_Select>
            <_.SurveyMBTI_Content
              State={!State1}
              onClick={() => {
                setState1(!State1);
              }}
            >
              E
            </_.SurveyMBTI_Content>
            <_.SurveyMBTI_Contents_Arrow>
              내향형 / 외향형
              <MBTI_Arrow />
            </_.SurveyMBTI_Contents_Arrow>
            <_.SurveyMBTI_Content
              State={State1}
              onClick={() => {
                setState1(!State1);
              }}
            >
              I
            </_.SurveyMBTI_Content>
          </_.SurveyMBTI_Contents_Select>

          <_.SurveyMBTI_Contents_Select>
            <_.SurveyMBTI_Content
              State={!State2}
              onClick={() => {
                setState2(!State2);
              }}
            >
              S
            </_.SurveyMBTI_Content>
            <_.SurveyMBTI_Contents_Arrow>
              직관형 / 감각형
              <MBTI_Arrow />
            </_.SurveyMBTI_Contents_Arrow>
            <_.SurveyMBTI_Content
              State={State2}
              onClick={() => {
                setState2(!State2);
              }}
            >
              N
            </_.SurveyMBTI_Content>
          </_.SurveyMBTI_Contents_Select>

          <_.SurveyMBTI_Contents_Select>
            <_.SurveyMBTI_Content
              State={!State3}
              onClick={() => {
                setState3(!State3);
              }}
            >
              T
            </_.SurveyMBTI_Content>
            <_.SurveyMBTI_Contents_Arrow>
              사고형 / 감정형
              <MBTI_Arrow />
            </_.SurveyMBTI_Contents_Arrow>
            <_.SurveyMBTI_Content
              State={State3}
              onClick={() => {
                setState3(!State3);
              }}
            >
              F
            </_.SurveyMBTI_Content>
          </_.SurveyMBTI_Contents_Select>

          <_.SurveyMBTI_Contents_Select>
            <_.SurveyMBTI_Content
              State={!State4}
              onClick={() => {
                setState4(!State4);
              }}
            >
              P
            </_.SurveyMBTI_Content>
            <_.SurveyMBTI_Contents_Arrow>
              인식형 / 판단형
              <MBTI_Arrow />
            </_.SurveyMBTI_Contents_Arrow>
            <_.SurveyMBTI_Content
              State={State4}
              onClick={() => {
                setState4(!State4);
              }}
            >
              J
            </_.SurveyMBTI_Content>
          </_.SurveyMBTI_Contents_Select>
        </_.SurveyMBTI_Contents>

        <NextButton text="다음" state={true} />
      </_.SurveyMBTI_Layout>
    </_.SurveyMBTI_Container>
  );
};

export default SurveyMBTI;
