// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import BackIcon from 'assets/Icon/BackIcon';
import ProgressBar1 from 'assets/image/ProgressBar1';
import ProgressBar2 from 'assets/image/ProgressBar2';
import ProgressBar3 from 'assets/image/ProgressBar3';
import { theme } from 'lib/utils/style/theme';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  buttonState?: string;
  isOnChatting?: boolean;
  onTapBackIcon?: () => void;
  onClickMethod?: () => void;
  buttonColor?: string;
}

const Header = ({
  title = '',
  buttonState = ' ',
  isOnChatting = false,
  onTapBackIcon = () => {},
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

  const navigate = useNavigate();
  const location = useLocation();

  const handleBackIcon = () => {
    if (location.pathname === '/register/terms') {
      navigate('/auth');
    } else if (location.pathname === '/plan/chat') {
      navigate('/plan/selectdate', { state: { fromHome: false } });
    } else {
      navigate(-1);
    }
    onTapBackIcon();
  };

  return (
    <_.Header_Container $isOnChatting={isOnChatting}>
      <_.Header_BackIcon onClick={handleBackIcon}>
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
          $ButtonColor={
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
