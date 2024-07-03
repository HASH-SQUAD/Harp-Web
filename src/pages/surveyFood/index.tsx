//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';

const SurveyFood = () => {
  const statusBarHeight = useStatusBarHeight();
  return (
    <_.SurveyFood_Container>
      <_.SurveyFoode_Layout
        StatusBarSize={`${statusBarHeight}px`}
      ></_.SurveyFoode_Layout>
    </_.SurveyFood_Container>
  );
};

export default SurveyFood;
