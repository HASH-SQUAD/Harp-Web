import { atom } from 'recoil';

export const selectedDaysState = atom<{ start: Date | null; end: Date | null }>(
  {
    key: 'selectedDaysState',
    default: { start: null, end: null }
  }
);