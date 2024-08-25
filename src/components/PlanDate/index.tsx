// 라이브러리
import React, { useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import { hasDateExpired } from 'lib/utils/hasDateExpired';

interface PlanDateProps {
  day: number;
  date: string;
  isSelected: boolean;
  onSelect: () => void;
}

const PlanDate = ({ day, date, isSelected, onSelect }: PlanDateProps) => {
  const [isPassed, setIsPassed] = useState<boolean>(false);

  const formatDate = () => {
    const [, month, day] = date.split('-');
    return `${month}/${day}`;
  };

  useEffect(() => {
    setIsPassed(hasDateExpired(date));
  }, [date]);

  return (
    <_.PlanDate_Layout
      onClick={onSelect}
      isPassed={isPassed}
      isSelected={isSelected}
    >
      <_.PlanDate_WhatDay>{day}일차</_.PlanDate_WhatDay>
      <_.PlanDate_Date>{formatDate()}</_.PlanDate_Date>
    </_.PlanDate_Layout>
  );
};

export default PlanDate;
