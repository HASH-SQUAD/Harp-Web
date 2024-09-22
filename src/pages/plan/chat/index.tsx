// 라이브러리
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';
import MessageBox from 'components/MessageBox';
import { initialQuestions } from 'data/InitialQuestions';
import { AIResponse } from 'types/aiResponse';
import { CreateParams, Plan_Chatting, Plan_Create } from 'lib/apis/Plan';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';
import { useRecoilValue } from 'recoil';
import { selectedDaysState } from 'atoms/plan';

const Chat = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sendImmediately, setSendImmediately] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] =
    useState<AIResponse[]>(initialQuestions);
  const [step, setStep] = useState<number>(0);
  const [planInfo, setPlanInfo] = useState<{ title: string; type: string }>({
    title: '',
    type: ''
  });
  const [textareaHeight, setTextareaHeight] = useState<number>(50);
  const { start, end } = useRecoilValue(selectedDaysState);

  const { mutate: ChattingMutation } = useMutation((userMessage: string) =>
    Plan_Chatting({
      id: id,
      subject: 'date',
      previousConversation: userMessage
    })
  );
  const { mutate: CreateMutation } = useMutation((params: CreateParams) =>
    Plan_Create(params)
  );

  const nextStep = (userMessage: string) => {
    if (step === 0) {
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
    } else {
      ChattingMutation(step === 1 ? '일정 짜줘' : message, {
        onSuccess: (response) => {
          if (response.data.Contents.category === undefined) {
            console.log(response.data.Contents);
            CreateMutation({
              planName: planInfo.title,
              mainImg:
                'https://harp-back.hash-squad.kro.kr/common/CommonPlanImg.png',
              startDate: formatSelectedDate(start),
              endDate: formatSelectedDate(end),
              data: response.data.Contents
            });
          } else {
            setChatHistory((prevChat) => [
              ...prevChat,
              {
                role: response.data.role,
                Contents: response.data.Contents
              }
            ]);
            setStep(step + 1);
          }
        },
        onError: (error: unknown) => {
          console.error('질문 받는 중 에러 ', error);
        }
      });
    }
  };

  const handleSendMessage = useCallback(() => {
    if (message.trim()) {
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
      setMessage('');
    }
  }, [message, nextStep]);

  const lastChat =
    chatHistory.length > 0 ? chatHistory[chatHistory.length - 1] : null;
  const selectOptions = lastChat?.Contents.select || [];
  const handleSelectOption = (option: string) => {
    setMessage(option);
    setSendImmediately(true);
  };

  useEffect(() => {
    if (sendImmediately && message.trim()) {
      handleSendMessage();
      setSendImmediately(false);
    }
  }, [message, sendImmediately]);

  const resizeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      setTextareaHeight(textarea.scrollHeight);
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
        <_.Chat_Messages textareaHeight={textareaHeight}>
          {chatHistory.map((chat, index) => (
            <MessageBox
              key={index}
              message={chat.Contents.question}
              role={chat.role}
              isLoading={!isLoading}
            />
          ))}
          {selectOptions.length > 0 && (
            <_.Chat_SelectList>
              {selectOptions.map((option, index) => (
                <_.Chat_SelectBox
                  onClick={() => {
                    handleSelectOption(option);
                  }}
                  key={index}
                >
                  {option}
                </_.Chat_SelectBox>
              ))}
            </_.Chat_SelectList>
          )}
          <div ref={messageEndRef} />
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
