import { CreateParams } from 'types/plan';
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

interface ResultParams {
  id: string | undefined;
}

export const Plan_Result = async (params: ResultParams) => {
  const { data } = await AuthInstance.get(`plan/getplan/${params.id}`);
  return data;
};
