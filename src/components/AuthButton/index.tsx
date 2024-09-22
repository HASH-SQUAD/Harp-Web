import React from 'react';
import * as _ from './style';

type OwnProps = {
  icon: React.ReactNode;
  content: string;
  background: string;
  onClick: () => void;
};

const AuthButton = ({ icon, content, background, onClick }: OwnProps) => {
  return (
    <_.AuthButton_Container background={background} onClick={onClick}>
      {icon}
      <_.AuthButton_Content>{content}</_.AuthButton_Content>
    </_.AuthButton_Container>
  );
};

export default AuthButton;
