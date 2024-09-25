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

// 공통 부분을 정의한 인터페이스
interface BasePlanResult {
  mainImg: string;
  startDate: string;
  endDate: string;
  data: DynamicDays[];
  userid: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface PlanResult extends BasePlanResult {
  planName: string;
  planId: string;
}

export interface RecommendedPlanResult extends BasePlanResult {
  title: string;
  RecommendedPlanId: string;
}
