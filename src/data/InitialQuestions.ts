import { AIResponse } from 'types/aiResponse';

export const initialQuestions: AIResponse[] = [
  {
    role: 'assistant',
    Contents: {
      subject: 'none',
      category: 'hello',
      question: '안녕하세요! 반갑습니다.',
      select: []
    }
  },
  {
    role: 'assistant',
    Contents: {
      subject: 'none',
      category: '',
      question: '저는 인공지능 AI 기태입니다.\n당신의 여행을 도와드리겠습니다.',
      select: []
    }
  },
  {
    role: 'assistant',
    Contents: {
      subject: 'none',
      category: 'title',
      question: '이번 계획의 제목을 알려주세요!',
      select: []
    }
  }
];
