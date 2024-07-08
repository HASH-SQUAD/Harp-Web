//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import BackIcon from 'assets/image/BackIcon';
import ProgressBar1 from 'assets/image/ProgressBar1';
import ProgressBar2 from 'assets/image/ProgressBar2';
import ProgressBar3 from 'assets/image/ProgressBar3';

interface HeaderProps {
  ProgressBar: number;
  title: string;
  buttonState: string;
  onClickMethod: () => void;
}

const Header = ({
  ProgressBar = 0,
  title = '',
  buttonState = '',
  onClickMethod
}: HeaderProps) => {
  return (
    <_.Header_Container>
      <_.Header_BackIcon>
        <BackIcon />
      </_.Header_BackIcon>

      {ProgressBar == 1 ? (
        <_.Header_ProgressBar>
          <ProgressBar1 />
        </_.Header_ProgressBar>
      ) : ProgressBar == 2 ? (
        <_.Header_ProgressBar>
          <ProgressBar2 />
        </_.Header_ProgressBar>
      ) : ProgressBar == 3 ? (
        <_.Header_ProgressBar>
          <ProgressBar3 />
        </_.Header_ProgressBar>
      ) : (
        ''
      )}

      {title == '' ? '' : <_.Header_Title>{title}</_.Header_Title>}

      {buttonState == '' ? (
        ''
      ) : (
        <_.Header_Button onClick={onClickMethod}>{buttonState}</_.Header_Button>
      )}
    </_.Header_Container>
  );
};

export default Header;
