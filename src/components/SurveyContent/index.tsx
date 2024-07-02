//라이브러리
import React from 'react';

//파일
import * as _ from './style';

interface SurveyContentProps {
  width: number;
  text: string;
  img: string;
}

const SurveyContent = ({ width, text, img }: SurveyContentProps) => {
  return (
    <_.SurveyContent_Container>
      <_.SurveyContent_Layout ContentWidth={`${width}px`}>
        <img src={img} />
      </_.SurveyContent_Layout>
      <_.SurveyContent_Text>{text}</_.SurveyContent_Text>
    </_.SurveyContent_Container>
  );
};

export default SurveyContent;
