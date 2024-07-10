// 라이브러리
import React, { useEffect, useRef, useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';
import { ChatContent } from 'data/ChatContent';

const Chat = () => {
  const statusBarHeight = useStatusBarHeight();
  const [message, setMessage] = useState<string>('');
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ChatContent]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessage('');
    }
  };

  return (
    <_.Chat_Container StatusBarSize={`${statusBarHeight}px`}>
      <_.Chat_Header>
        <Header
          title="AI 디토"
          buttonState=""
          isOnChatting={true}
          onClickMethod={() => {}}
        />
      </_.Chat_Header>
      <_.Chat_Messages>
        {ChatContent.map((item) => (
          <div key={item.content.text}>{item.content.text}</div>
        ))}
        <div ref={messageEndRef} />
      </_.Chat_Messages>
      <_.Chat_Typing_Container>
        <_.Chat_Typing_Box>
          <_.Chat_Input
            type="text"
            value={message}
            placeholder="메시지 보내기..."
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
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
