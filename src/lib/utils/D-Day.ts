const calculateDDay = (planDate: string) => {
  const today = new Date();
  const targetDate = new Date(planDate);
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return `D-${diffDays}`;
  } else if (diffDays === 0) {
    return 'D-Day';
  } else {
    return `D+${Math.abs(diffDays)}`;
  }
};

export default calculateDDay;
