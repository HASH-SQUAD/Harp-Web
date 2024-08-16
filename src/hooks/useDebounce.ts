import { useEffect, useState } from 'react';

interface OwnProps {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: OwnProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
