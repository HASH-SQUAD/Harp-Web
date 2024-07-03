//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';

const SurveyMBTI = () => {
  const statusBarHeight = useStatusBarHeight();
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
      </_.SurveyMBTI_Layout>
    </_.SurveyMBTI_Container>
  );
};

export default SurveyMBTI;
