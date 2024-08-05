// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';

const PlanDate = () => {
  const [isPassed, setIsPassed] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <_.PlanDate_Layout
      isPassed={isPassed}
      isSelected={isSelected}
      onClick={toggleSelect}
    >
      <_.PlanDate_WhatDay>1일차</_.PlanDate_WhatDay>
      <_.PlanDate_Date>11/29</_.PlanDate_Date>
    </_.PlanDate_Layout>
  );
};

export default PlanDate;
