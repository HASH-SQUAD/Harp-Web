import React from 'react';
import * as _ from './style';

interface SurveyContentProps {
  width: number;
  text: string;
  img: string;
  state: boolean;
  onClick: () => void;
}

const SurveyContent = ({
  width,
  text,
  img,
  state,
  onClick
}: SurveyContentProps) => {
  return (
    <_.SurveyContent_Container onClick={onClick}>
      <_.SurveyContent_Layout ContentWidth={`${width}px`} State={state}>
        <img src={img} alt={text} />
      </_.SurveyContent_Layout>
      <_.SurveyContent_Text>{text}</_.SurveyContent_Text>
    </_.SurveyContent_Container>
  );
};

export default SurveyContent;
