// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';

const Chat = () => {
  const statusBarHeight = useStatusBarHeight();
  const [message, setMessage] = useState<string>('');

  return (
    <_.Chat_Container StatusBarSize={`${statusBarHeight}px`}>
      <Header
        title="AI 디토"
        buttonState=""
        isOnChatting={true}
        onClickMethod={() => {}}
      />
      <_.Chat_Content>
        <_.Chat_Messages></_.Chat_Messages>
        <_.Chat_Typing_Box>
          <_.Chat_Input
            type="text"
            placeholder="메시지 보내기..."
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
          />
          <_.Chat_SendIcon>
            <Send stroke={message ? theme.primary[7] : theme.gray[2]} />
          </_.Chat_SendIcon>
        </_.Chat_Typing_Box>
      </_.Chat_Content>
    </_.Chat_Container>
  );
};

export default Chat;
