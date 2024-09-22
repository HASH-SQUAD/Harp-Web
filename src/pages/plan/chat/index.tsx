// 라이브러리
import React, { useEffect, useRef, useState } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';
import MessageBox from 'components/MessageBox';
import { initialQuestions } from 'data/InitialQuestions';
import { AIResponse } from 'types/aiResponse';

const Chat = () => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] =
    useState<AIResponse[]>(initialQuestions);
  const [step, setStep] = useState<number>(0);
  const [planInfo, setPlanInfo] = useState<{ title: string; type: string }>({
    title: '',
    type: ''
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
      textareaRef.current?.focus();
      setChatHistory((prevChat) => [
        ...prevChat,
        {
          role: 'user',
          Contents: {
            subject: 'none',
            category: 'none',
            question: message,
            select: []
          }
        }
      ]);
      nextStep(message);
    }
  };

  const nextStep = (userMessage: string) => {
    if (step == 0) {
      setPlanInfo({ ...planInfo, title: userMessage });
      setChatHistory((prevChat) => [
        ...prevChat,
        {
          role: 'assistant',
          Contents: {
            subject: 'none',
            category: 'subject',
            question: '숙박 여행인가요, 당일치기 여행인가요?',
            select: ['숙박', '당일치기']
          }
        }
      ]);
      setStep(step + 1);
    }
  };

  const resizeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    setMessage(e.target.value);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <_.Chat_Layout>
      <_.Chat_Container>
        <Header title="AI 디토" isOnChatting={true} />
        <_.Chat_Messages>
          {chatHistory.map((chat, index) => (
            <MessageBox
              key={index}
              message={chat.Contents.question}
              role={chat.role}
              isLoading={!isLoading}
            />
          ))}
          <div ref={messageEndRef} />
          <_.Chat_SelectList>
            <_.Chat_SelectBox>숙박여행</_.Chat_SelectBox>
            <_.Chat_SelectBox>당일치기</_.Chat_SelectBox>
          </_.Chat_SelectList>
        </_.Chat_Messages>
        <_.Chat_Typing_Container>
          <_.Chat_Typing_Box>
            <_.Chat_Textarea
              value={message}
              placeholder="메시지 보내기..."
              rows={1}
              maxLength={100}
              ref={textareaRef}
              onChange={resizeHeight}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <_.Chat_SendIcon onClick={handleSendMessage}>
              <Send stroke={message ? theme.primary[7] : theme.gray[2]} />
            </_.Chat_SendIcon>
          </_.Chat_Typing_Box>
        </_.Chat_Typing_Container>
      </_.Chat_Container>
    </_.Chat_Layout>
  );
};

export default Chat;
