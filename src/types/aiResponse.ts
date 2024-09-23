export interface AIResponse {
  role: string;
  Contents: {
    subject: string;
    category: string;
    question: string;
    select: string[];
  };
}
