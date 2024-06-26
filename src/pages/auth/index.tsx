// 라이브러리
import React from "react";

// 파일
import * as _ from "./style";
import useStatusBarHeight from "../../hooks/useStatusBarHeight";
import RoundedTriangle from "assets/image/RoundedTriangle";
import AuthButton from "components/AuthButton";
import KakaoTalk from "assets/image/KakaoTalk";
import Google from "assets/image/Google";

const Auth = () => {
  const statusBarHeight = useStatusBarHeight();
  const title = "How are\nyou\nPlanning?";

  return (
    <_.Auth_Container>
      <_.Auth_Layout StatusBarSize={`${statusBarHeight}px`}>
        <_.Auth_Title_Layout>
          <_.Auth_Title_Big>{title}</_.Auth_Title_Big>
          <_.Auth_Title_Small>하프와 함께하는 여행 계획</_.Auth_Title_Small>
        </_.Auth_Title_Layout>
        <_.Auth_Button_Layout>
          <_.Auth_Button_Ballon>
            <_.Auth_Button_Ballon_Title>
              3초만에 하는 빠른 회원가입🚀
            </_.Auth_Button_Ballon_Title>
            <_.Auth_Button_Ballon_SVG>
              <RoundedTriangle />
            </_.Auth_Button_Ballon_SVG>
          </_.Auth_Button_Ballon>
          <AuthButton
            background="#FEE500"
            icon={<KakaoTalk />}
            content="카카오 로그인"
          />
          <AuthButton
            background="#FFF"
            icon={<Google />}
            content="구글 로그인"
          />
          <_.Auth_Button_Hint>로그인에 어려움이 있으신가요?</_.Auth_Button_Hint>
        </_.Auth_Button_Layout>
      </_.Auth_Layout>
    </_.Auth_Container>
  );
};

export default Auth;
