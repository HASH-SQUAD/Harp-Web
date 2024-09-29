export const formatTravelPeriod = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return '';

  const start = new Date(startDate);
  const end = new Date(endDate);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const timeDiff = end.getTime() - start.getTime();
  const dayDiff = timeDiff / (1000 * 3600 * 24);

  if (dayDiff === 0) {
    return '당일치기';
  } else {
    return `${dayDiff}박 ${dayDiff + 1}일`;
  }
};
