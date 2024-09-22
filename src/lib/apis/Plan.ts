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
