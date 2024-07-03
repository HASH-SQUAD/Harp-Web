//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';

const SurveyFood = () => {
  const statusBarHeight = useStatusBarHeight();
  return (
    <_.SurveyFood_Container>
      <_.SurveyFoode_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          title=""
          StatusBar={2}
          buttonState=""
          onClickMethod={() => {
            return;
          }}
        />

        <_.SurveyFood_ProgressText>2/3</_.SurveyFood_ProgressText>

        <_.SurveyFood_MainText>
          당신의 음식 취향을
          <br />
          알려주세요.
          <_.SurveyFood_SubText>
            최대 2개까지 선택할 수 있어요!
          </_.SurveyFood_SubText>
        </_.SurveyFood_MainText>

        <_.SurveyFood_Contents></_.SurveyFood_Contents>
      </_.SurveyFoode_Layout>
    </_.SurveyFood_Container>
  );
};

export default SurveyFood;
