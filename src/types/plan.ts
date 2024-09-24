import { schedule } from './schedule';

interface DynamicDays {
  days: schedule[];
}

interface PlanData extends DynamicDays {
  tips: string[];
}

export interface CreateParams {
  planName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  data: PlanData[];
}

export interface PlanResult {
  planName: string;
  mainImg: string | undefined;
  startDate: string;
  endDate: string;
  data: DynamicDays[];
  userid: string;
  planId: string;
}
