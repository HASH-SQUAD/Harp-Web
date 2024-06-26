// 라이브러리
import React from "react";

// 파일
import * as _ from "./style";
import useStatusBarHeight from "../../hooks/useStatusBarHeight";

const Auth = () => {
  const statusBarHeight = useStatusBarHeight();

  return (
    <_.Auth_Container>
      <_.Auth_Layout StatusBarSize={`${statusBarHeight}px`}>
        Data {statusBarHeight}
      </_.Auth_Layout>
    </_.Auth_Container>
  );
};

export default Auth;
