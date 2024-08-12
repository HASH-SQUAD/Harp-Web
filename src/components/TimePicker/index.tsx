// 라이브러리
import React, { useRef, useEffect, useState, useCallback } from 'react';

// 파일
import * as _ from './style';

interface TimePickerProps {
  list: string[];
  onSelectedChange?: (selected: string) => void;
}

const TimePicker = ({ list, onSelectedChange }: TimePickerProps) => {
  const SCROLL_DEBOUNCE_TIME = 100;

  const newList = ['', ...list, ''];
  const ref = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(1);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ITEM_HEIGHT = 50;

  const handleScroll = useCallback(() => {
    if (ref.current) {
      clearTimeout(timerRef.current!);
      if (ref.current.scrollTop < ITEM_HEIGHT) {
        ref.current.scrollTop = ITEM_HEIGHT;
      }
      timerRef.current = setTimeout(() => {
        const index = Math.floor(
          (ref.current!.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT
        );
        if (list[index] !== '') {
          setSelected(index);
          itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          onSelectedChange && onSelectedChange(newList[index]);
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  }, [onSelectedChange, newList]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
    }
  }, []);

  return (
    <_.TimePicker_Layout ref={ref} onScroll={handleScroll}>
      <_.TimePicker_Center />
      {newList.map((item, index) => (
        <_.TimePicker_Item
          key={index}
          isSelected={index === selected}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          {item}
        </_.TimePicker_Item>
      ))}
    </_.TimePicker_Layout>
  );
};

export default TimePicker;
