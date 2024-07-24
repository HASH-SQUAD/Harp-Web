// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import DefaultImg from 'assets/image/DefaultProfile.png';
import ProfileEdit from 'assets/Icon/ProfileEdit';
import EmailCopy from 'assets/Icon/EmialCopy';

const Edit = () => {
  const statusBarHeight = useStatusBarHeight();
  const email = 'abcd1234@gmail.com';

  return (
    <_.Edit_Container StatusBarSize={`${statusBarHeight}px`}>
      <Header
        title="회원 정보 수정"
        buttonState=""
        isOnChatting={false}
        onClickMethod={() => {}}
      />
      <_.Edit_Content>
        <_.Edit_Profile>
          <_.Edit_Profile_Img src={DefaultImg} alt="프로필 이미지" />
          <_.Edit_Profile_Edit>
            <ProfileEdit />
          </_.Edit_Profile_Edit>
        </_.Edit_Profile>
        <_.Edit_Infos>
          <_.Edit_Info>
            <_.Edit_Info_Label>이메일</_.Edit_Info_Label>
            <_.Edit_Info_Email>
              {email}
              <EmailCopy onClick={() => {}} />
            </_.Edit_Info_Email>
          </_.Edit_Info>
        </_.Edit_Infos>
      </_.Edit_Content>
    </_.Edit_Container>
  );
};

export default Edit;
