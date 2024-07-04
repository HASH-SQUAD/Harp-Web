import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as _ from './style';

const Birthday: React.FC = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);
  const [day, setDay] = useState<number>(currentDay);

  const years = Array.from({ length: 101 }, (_, i) => currentYear - 100 + i);
  const getMonths = (year: number) =>
    Array.from(
      { length: year === currentYear ? currentMonth : 12 },
      (_, i) => i + 1
    );
  const getDays = (year: number, month: number) =>
    Array.from(
      {
        length:
          year === currentYear && month === currentMonth
            ? currentDay
            : new Date(year, month, 0).getDate()
      },
      (_, i) => i + 1
    );

  const months = getMonths(year);
  const days = getDays(year, month);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    (
      ref: React.RefObject<HTMLDivElement>,
      setter: React.Dispatch<React.SetStateAction<number>>,
      values: number[]
    ) => {
      if (ref.current) {
        const scrollTop = ref.current.scrollTop;
        const index = Math.round(scrollTop / 55);
        setter(values[Math.min(index, values.length - 1)]);
      }
    },
    []
  );

  const scrollToCenter = useCallback(
    (ref: React.RefObject<HTMLDivElement>, value: number, values: number[]) => {
      if (ref.current) {
        const index = values.indexOf(value);
        ref.current.scrollTop = index * 55;
      }
    },
    []
  );

  useEffect(() => {
    scrollToCenter(yearRef, year, years);
    scrollToCenter(monthRef, month, months);
    scrollToCenter(dayRef, day, days);
  }, [year, month, day, years, months, days, scrollToCenter]);

  useEffect(() => {
    const yearScrollHandler = () => handleScroll(yearRef, setYear, years);
    const monthScrollHandler = () => handleScroll(monthRef, setMonth, months);
    const dayScrollHandler = () => handleScroll(dayRef, setDay, days);

    const yearScroll = yearRef.current;
    const monthScroll = monthRef.current;
    const dayScroll = dayRef.current;

    yearScroll?.addEventListener('scroll', yearScrollHandler);
    monthScroll?.addEventListener('scroll', monthScrollHandler);
    dayScroll?.addEventListener('scroll', dayScrollHandler);

    return () => {
      yearScroll?.removeEventListener('scroll', yearScrollHandler);
      monthScroll?.removeEventListener('scroll', monthScrollHandler);
      dayScroll?.removeEventListener('scroll', dayScrollHandler);
    };
  }, [handleScroll, years, months, days]);

  useEffect(() => {
    if (day > new Date(year, month, 0).getDate()) {
      setDay(new Date(year, month, 0).getDate());
    }
  }, [year, month, day]);

  return (
    <_.Birthday_Container>
      <_.Birthday_Layout>
        <_.Birthday_Title>생년월일</_.Birthday_Title>
        <_.Birthday_Calendar>
          <_.Birthday_ScrollPicker ref={yearRef}>
            <_.Birthday_PickerItem_Placeholder />
            {years.map((y) => (
              <_.Birthday_PickerItem key={y} selected={y === year}>
                {y}
              </_.Birthday_PickerItem>
            ))}
            <_.Birthday_PickerItem_Placeholder />
          </_.Birthday_ScrollPicker>
          <_.Birthday_ScrollPicker ref={monthRef}>
            <_.Birthday_PickerItem_Placeholder />
            {months.map((m) => (
              <_.Birthday_PickerItem key={m} selected={m === month}>
                {m.toString().padStart(2, '0')}
              </_.Birthday_PickerItem>
            ))}
            <_.Birthday_PickerItem_Placeholder />
          </_.Birthday_ScrollPicker>
          <_.Birthday_ScrollPicker ref={dayRef}>
            <_.Birthday_PickerItem_Placeholder />
            {days.map((d) => (
              <_.Birthday_PickerItem key={d} selected={d === day}>
                {d.toString().padStart(2, '0')}
              </_.Birthday_PickerItem>
            ))}
            <_.Birthday_PickerItem_Placeholder />
          </_.Birthday_ScrollPicker>
        </_.Birthday_Calendar>
        <_.Birthday_Button>확인</_.Birthday_Button>
      </_.Birthday_Layout>
    </_.Birthday_Container>
  );
};

export default Birthday;
