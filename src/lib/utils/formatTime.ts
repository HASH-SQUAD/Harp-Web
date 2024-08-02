export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours < 12 ? '오전' : '오후';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${period} ${formattedHours}시 ${minutes > 0 ? `${minutes}분` : ''}`;
};
