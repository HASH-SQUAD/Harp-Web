// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import { calendar } from 'types/calendar';

const Calendar = ({ selectedDays, setSelectedDays }: calendar) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (toDay: Date, compareDay?: Date | null) => {
    if (
      toDay.getFullYear() === compareDay?.getFullYear() &&
      toDay.getMonth() === compareDay?.getMonth() &&
      toDay.getDate() === compareDay?.getDate()
    ) {
      return true;
    }
    return false;
  };

  const isBetweenDays = (
    day: Date,
    startDay: Date | null,
    endDay: Date | null
  ) => {
    if (!startDay || !endDay) return false;
    return day > startDay && day < endDay;
  };

  const isPastDay = (day: Date) => {
    return day < today;
  };

  const isFutureDay = (day: Date) => {
    return day.getMonth() !== currentMonth.getMonth();
  };

  const onClickDay = (day: Date) => {
    if (isPastDay(day) || isFutureDay(day)) {
      return;
    }
    if (!selectedDays.start || selectedDays.end) {
      setSelectedDays({ start: day, end: null });
    } else if (isSameDay(day, selectedDays.start)) {
      setSelectedDays({ start: null, end: null });
    } else if (day > selectedDays.start) {
      setSelectedDays({ ...selectedDays, end: day });
    } else {
      setSelectedDays({ start: day, end: selectedDays.start });
    }
  };

  const buildCalendarDays = () => {
    const curMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const curMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    );
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    const days: Date[] = Array.from({ length: curMonthStartDate }, (_, i) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthEndDate.getDate() - i
      );
    }).reverse();

    days.push(
      ...Array.from(
        { length: curMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
      )
    );

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1
            )
        )
      );
    }
    return days;
  };

  const buildCalendarTag = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, i: number) => {
      const dayOfWeek = day.getDay();
      const pastDay = isPastDay(day);
      const futureDay = isFutureDay(day);
      const selectedStart = isSameDay(day, selectedDays.start);
      const selectedEnd = isSameDay(day, selectedDays.end);
      const betweenDays = isBetweenDays(
        day,
        selectedDays.start,
        selectedDays.end
      );

      let className = '';
      if (pastDay || futureDay) {
        className += ' disabled-day';
      }
      if (selectedStart) {
        className += ' selected-start';
      }
      if (selectedEnd) {
        className += ' selected-end';
      }
      if (betweenDays) {
        className += ' between-days';
      }

      return (
        <_.Calendar_Date_Td
          dayOfweek={dayOfWeek}
          key={i}
          onClick={() => onClickDay(day)}
          disabled={pastDay || futureDay}
          className={className}
        >
          {day.getDate()}
        </_.Calendar_Date_Td>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      []
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <_.Calendar_Container>
      <_.Calendar_Date_Title>
        {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
      </_.Calendar_Date_Title>
      <_.Calendar_Table>
        <thead>
          <_.Calendar_DayofWeek_Tr>
            {daysOfWeek.map((day, i) => (
              <_.Calendar_DayofWeek_Td
                day={day}
                key={i}
                data-testid="calendarHead"
              >
                {day}
              </_.Calendar_DayofWeek_Td>
            ))}
          </_.Calendar_DayofWeek_Tr>
        </thead>
        <tbody>
          {calendarRows.map((row: JSX.Element[], i: number) => (
            <_.Calendar_Date_Tr key={i}>{row}</_.Calendar_Date_Tr>
          ))}
        </tbody>
      </_.Calendar_Table>
    </_.Calendar_Container>
  );
};

export default Calendar;
