import { AuthInstance } from './Axios';

export const Plan_CreatAI = async () => {
  const { data } = await AuthInstance.post(`chat/createai`);
  return data;
};

interface ChattingParams {
  id: string | undefined;
  subject: 'travel' | 'date';
  previousConversation: string;
}

export const Plan_Chatting = async (params: ChattingParams) => {
  const { id, subject, previousConversation } = params;
  const { data } = await AuthInstance.post(`chat/${subject}/${id}`, {
    previousConversation: previousConversation
  });
  return data;
};

interface ScheduleItem {
  time: string;
  activity: string;
  recommendation: string;
  location: string;
}

interface DynamicDays {
  [key: string]: ScheduleItem[];
}

interface PlanData {
  days: DynamicDays;
  tips: string[];
}

export interface CreateParams {
  planName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  data: PlanData;
}

export const Plan_Create = async (params: CreateParams) => {
  const { data } = await AuthInstance.post(`plan`, {
    planName: params.planName,
    mainImg: params.mainImg,
    startDate: params.startDate,
    endDate: params.endDate,
    data: params.data
  });
  return data;
};
