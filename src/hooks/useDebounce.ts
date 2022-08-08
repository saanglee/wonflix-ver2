import { useState, useEffect } from 'react';

export const useDebounce = (value: any, delay: number) => {
  const [debouncingValue, setDebouncingValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncingValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncingValue;
};
