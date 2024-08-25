// 라이브러리
import React, { useEffect, useRef, useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';
import { ChatContent } from 'data/ChatContent';
import MessageBox from 'components/MessageBox';

const Chat = () => {
  const statusBarHeight = useStatusBarHeight();
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const resizeHeight = (
    textarea: React.RefObject<HTMLTextAreaElement>,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (textarea.current) {
      textarea.current.style.height = 'auto';
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
      setMessage(e.target.value);
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ChatContent]);

  return (
    <_.Chat_Container StatusBarSize={`${statusBarHeight}px`}>
      <Header title="AI 디토" isOnChatting={true} />
      <_.Chat_Messages>
        {ChatContent.map((item, index) => (
          <MessageBox
            key={index}
            message={item.content.text}
            role={item.role}
            isLoading={isLoading}
          >
            {item.content.text}
          </MessageBox>
        ))}
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
            onChange={(e) => resizeHeight(textareaRef, e)}
            onKeyDown={(e) => {
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
  );
};

export default Chat;
