//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import SurveyContent from 'components/SurveyContent';

//이미지들
const Mood = 'assets/image/SurveyStyle/Mood.png'

const SurveyStyle = () => {
  const statusBarHeight = useStatusBarHeight();
  return (
    <_.SurveyStyle_Container>
      <_.SurveyStyle_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          title=""
          StatusBar={1}
          buttonState=""
          onClickMethod={() => {
            return;
          }}
        />

        <_.SurveyStyle_ProgressText>1/3</_.SurveyStyle_ProgressText>

        <_.SurveyStyle_MainText>
          좋아하는 여행 유형을
          <br /> 골라보세요.
          <_.SurveyStyle_SubText>
            최대 3개까지 선택할 수 있어요!
          </_.SurveyStyle_SubText>
        </_.SurveyStyle_MainText>

        <_.SurveyStyle_Contents>
          <SurveyContent width={100} text="분위기" img={Mood} />
        </_.SurveyStyle_Contents>
      </_.SurveyStyle_Layout>
    </_.SurveyStyle_Container>
  );
};

export default SurveyStyle;
