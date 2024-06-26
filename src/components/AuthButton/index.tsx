import React from "react";
import * as _ from "./style";

type OwnProps = {
  icon: React.ReactNode;
  content: string;
  background: string;
};

const AuthButton = ({ icon, content, background }: OwnProps) => {
  return (
    <_.AuthButton_Container background={background}>
      {icon}
      <_.AuthButton_Content>{content}</_.AuthButton_Content>
    </_.AuthButton_Container>
  );
};

export default AuthButton;
