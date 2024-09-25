export const formatSelectedDate = (
  date: Date | string | null,
  slice: string
) => {
  if (!date) {
    return '';
  }

  let parsedDate: Date;

  if (typeof date === 'string') {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getDate()).padStart(2, '0');

  return `${year}${slice}${month}${slice}${day}${slice === '.' ? '.' : ''}`;
};
