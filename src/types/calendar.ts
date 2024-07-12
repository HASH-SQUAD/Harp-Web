export type calendar = {
  selectedDay: Date | null;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | null>>;
  isPrevMonth: boolean;
  isNextMonth: boolean;
};
