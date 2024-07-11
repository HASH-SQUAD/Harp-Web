//라이브러리
import React from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import RocketImage from 'assets/image/Rocket.png';

const SurveyEnd = () => {
  const statusBarHeight = useStatusBarHeight();
  return (
    <_.SurveyEnd_Container StatusBarSize={`${statusBarHeight}px`}>
      <Header
        title=""
        buttonState=""
        isOnChatting={false}
        onClickMethod={() => {
          return;
        }}
      />
      <_.SurveyEnd_Content>
        <_.SurveyEnd_MainTitle>
          반가워요! 지금부터
          <_.SurveyEnd_Title>여행 계획을 세워볼까요?</_.SurveyEnd_Title>
          <_.SurveyEnd_SubTitle>
            하프와 함께 빠르고 편리한 여행 계획을 세워봐요
          </_.SurveyEnd_SubTitle>
          <_.SurveyEnd_Rocket src={RocketImage} />
        </_.SurveyEnd_MainTitle>

        <_.SurveyEnd_OtherInfo>
          더 알려주고 싶은 것이 있나요?
        </_.SurveyEnd_OtherInfo>
      </_.SurveyEnd_Content>

      <NextButton text="시작하기" state={true} />

      <_.SurveyEnd_Bubble1 />
      <_.SurveyEnd_Bubble2 />
      <_.SurveyEnd_Bubble3 />
      <_.SurveyEnd_Bubble4 />
      <_.SurveyEnd_Bubble5 />
      <_.SurveyEnd_Bubble6 />
      <_.SurveyEnd_Bubble7 />
    </_.SurveyEnd_Container>
  );
};

export default SurveyEnd;
