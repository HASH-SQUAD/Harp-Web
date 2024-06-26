// 라이브러리
import React from "react";

// 파일
import * as _ from "./style";
import useStatusBarHeight from "../../hooks/useStatusBarHeight";
import RoundedTriangle from "assets/image/RoundedTriangle";

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
          </_.Auth_Button_Ballon>
          <_.Auth_Button_Ballon_SVG>
            <RoundedTriangle />
          </_.Auth_Button_Ballon_SVG>
        </_.Auth_Button_Layout>
      </_.Auth_Layout>
    </_.Auth_Container>
  );
};

export default Auth;
