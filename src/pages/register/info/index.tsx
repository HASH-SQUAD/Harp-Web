// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import NextButton from 'components/NextButton';

const Info = () => {
  const statusBarHeight = useStatusBarHeight();
  const title = '환영합니다!\n회원정보를 입력해주세요.';

  return (
    <_.Info_Container>
      <_.Info_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          StatusBar={0}
          title=""
          buttonState=""
          onClickMethod={() => {
            return 0;
          }}
        />
        <_.Info_Title_Layout>
          <_.Info_Title_Big>{title}</_.Info_Title_Big>
          <_.Info_Title_Small>
            하프 서비스 이용을 위해 활용됩니다.
          </_.Info_Title_Small>
        </_.Info_Title_Layout>
        <_.Info_Inputs>
          <_.Info_Input_Layout>
            <_.Info_Input_Title>
              여행자 닉네임 <_.Info_Input_Title_Star>*</_.Info_Input_Title_Star>
            </_.Info_Input_Title>
            <_.Info_Input_Box
              type="text"
              placeholder="2글자 이상 입력해주세요."
            />
          </_.Info_Input_Layout>
          <_.Info_Input_Layout>
            <_.Info_Input_Title>
              생년월일 <_.Info_Input_Title_Star>*</_.Info_Input_Title_Star>
            </_.Info_Input_Title>
            <_.Info_Input_Box type="text" placeholder="2024/01/01" />
          </_.Info_Input_Layout>
        </_.Info_Inputs>
        <NextButton text="다음" state={false} />
      </_.Info_Layout>
    </_.Info_Container>
  );
};

export default Info;
