export const formatTime = (time: string | undefined): string => {
  if (!time) {
    return '';
  }
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours < 12 ? '오전' : '오후';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${period} ${formattedHours}:${minutes > 0 ? `${minutes}` : '00'}`;
};
