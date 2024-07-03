//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';

const SurveyMBTI = () => {
  const statusBarHeight = useStatusBarHeight();
  return (
    <_.SurveyMBTI_Container>
      <_.SurveyMBTI_Layout
        StatusBarSize={`${statusBarHeight}px`}
      ></_.SurveyMBTI_Layout>
    </_.SurveyMBTI_Container>
  );
};

export default SurveyMBTI;
