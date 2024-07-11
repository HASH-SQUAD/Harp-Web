export const formatBirthday = (value: string): string => {
  const sanitizedValue = value.replace(/\D+/g, '');
  const maxBirthdayLength = 8;

  let result = '';

  for (let i = 0; i < sanitizedValue.length && i < maxBirthdayLength; i++) {
    if (i === 4 || i === 6) {
      result += '/';
    }
    result += sanitizedValue[i];
  }

  return result;
};
