// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import BackIcon from 'assets/image/BackIcon';
import ProgressBar1 from 'assets/image/ProgressBar1';
import ProgressBar2 from 'assets/image/ProgressBar2';
import ProgressBar3 from 'assets/image/ProgressBar3';
import { theme } from 'lib/utils/style/theme';

interface HeaderProps {
  title?: string;
  buttonState?: string;
  isOnChatting?: boolean;
  onClickMethod?: () => void;
  buttonColor?: string;
}

const Header = ({
  title = '',
  buttonState = '',
  isOnChatting = false,
  onClickMethod = () => {},
  buttonColor = ''
}: HeaderProps) => {
  let progressBar;
  if (title === '1') {
    progressBar = <ProgressBar1 />;
  } else if (title === '2') {
    progressBar = <ProgressBar2 />;
  } else if (title === '3') {
    progressBar = <ProgressBar3 />;
  }

  return (
    <_.Header_Container isOnChatting={isOnChatting}>
      <_.Header_BackIcon>
        <BackIcon />
      </_.Header_BackIcon>

      {progressBar ? (
        <_.Header_ProgressBar>{progressBar}</_.Header_ProgressBar>
      ) : (
        <_.Header_Title>{title}</_.Header_Title>
      )}

      {buttonState && (
        <_.Header_Button
          onClick={onClickMethod}
          ButtonColor={
            buttonColor === 'purple' ? theme.primary[7] : theme.sub.red
          }
        >
          {buttonState}
        </_.Header_Button>
      )}
    </_.Header_Container>
  );
};

export default Header;
