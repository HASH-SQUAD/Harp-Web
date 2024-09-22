import { AuthInstance } from './Axios';

export const Plan_CreatAI = async () => {
  const { data } = await AuthInstance.post(`chat/createai`);
  return data;
};
