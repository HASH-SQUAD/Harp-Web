export type calendar = {
  selectedDays: { start: Date | null; end: Date | null };
  setSelectedDays: React.Dispatch<
    React.SetStateAction<{ start: Date | null; end: Date | null }>
  >;
};
