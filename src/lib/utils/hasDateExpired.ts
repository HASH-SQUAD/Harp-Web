export const hasDateExpired = (date: string) => {
  const today = new Date();
  const targetDate = new Date(date);

  return today > targetDate;
};
