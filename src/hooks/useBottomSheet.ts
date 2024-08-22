import { useRef, useEffect } from 'react';
import { MIN_Y, MAX_Y, INITIAL_Y } from 'config/constants';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: 'none' | 'down' | 'up';
    touchOffset?: number;
  };
  isContentAreaTouched: boolean;
}

export const useBottomSheet = () => {
  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: INITIAL_Y,
      touchY: 0
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
      touchOffset: 0
    },
    isContentAreaTouched: false
  });

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      if (!isContentAreaTouched) {
        return true;
      }
      if (sheet.current!.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }
      if (touchMove.movingDirection === 'down') {
        return content.current!.scrollTop <= 0;
      }
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];
      const touchOffset = currentTouch.clientY - touchStart.touchY;
      touchMove.touchOffset = touchOffset;

      if (Math.abs(touchOffset) < 10) {
        return;
      }

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = 'down';
      } else if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = 'up';
      }

      if (canUserMoveBottomSheet()) {
        e.preventDefault();

        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        } else if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        sheet.current!.style.setProperty(
          'transform',
          `translateY(${nextSheetY - MAX_Y}px)`
        );
      } else {
        document.body.style.overflowY = 'hidden';
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = 'auto';
      const currentSheetY = sheet.current!.getBoundingClientRect().y;

      let targetY = MIN_Y;

      if (
        Math.abs(currentSheetY - INITIAL_Y) < Math.abs(currentSheetY - MIN_Y) &&
        Math.abs(currentSheetY - INITIAL_Y) < Math.abs(currentSheetY - MAX_Y)
      ) {
        targetY = INITIAL_Y;
      } else if (
        Math.abs(currentSheetY - MAX_Y) < Math.abs(currentSheetY - MIN_Y)
      ) {
        targetY = MAX_Y;
      }

      sheet.current!.style.setProperty(
        'transform',
        `translateY(${targetY - MAX_Y}px)`
      );

      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
          touchOffset: 0
        },
        isContentAreaTouched: false
      };
    };

    sheet.current!.addEventListener('touchstart', handleTouchStart);
    sheet.current!.addEventListener('touchmove', handleTouchMove);
    sheet.current!.addEventListener('touchend', handleTouchEnd);

    sheet.current!.style.setProperty(
      'transform',
      `translateY(${INITIAL_Y - MAX_Y}px)`
    );
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current!.isContentAreaTouched = true;
    };
    content.current!.addEventListener('touchstart', handleTouchStart);
  }, []);

  return { sheet, content };
};
