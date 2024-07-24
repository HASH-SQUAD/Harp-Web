// 라이브러리
import React, { ChangeEvent, useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import DefaultImg from 'assets/image/DefaultProfile.png';
import ProfileEdit from 'assets/Icon/ProfileEdit';
import EmailCopy from 'assets/Icon/EmialCopy';
import NextButton from 'components/NextButton';
import { formatBirthday } from 'lib/utils/formatBirthday';

const Edit = () => {
  const statusBarHeight = useStatusBarHeight();
  const email = 'abcd1234@gmail.com';

  const initialInfos = {
    username: '탐험가 고릴라',
    birthday: '2007/07/18',
    gender: '여자'
  };

  const [infos, setInfos] = useState(initialInfos);
  const [isChanged, setIsChanged] = useState(false);

  const handleInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInfos((prevInfos) => {
      const newInfos = { ...prevInfos, [name]: value };
      setIsChanged(JSON.stringify(newInfos) !== JSON.stringify(initialInfos));
      return newInfos;
    });
  };

  const handleBirthday = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedBirthday = formatBirthday(e.currentTarget.value);
    setInfos((prevInfos) => {
      const newInfos = { ...prevInfos, birthday: formattedBirthday };
      setIsChanged(JSON.stringify(newInfos) !== JSON.stringify(initialInfos));
      return newInfos;
    });
  };

  const isFormValid = () => {
    const { username, birthday, gender } = infos;
    return username.length >= 2 && birthday && gender;
  };

  return (
    <>
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
            <_.Edit_Info>
              <_.Edit_Info_Label>여행자 닉네임</_.Edit_Info_Label>
              <_.Edit_Info_Input
                name="username"
                value={infos.username}
                onChange={handleInfos}
              />
            </_.Edit_Info>
            <_.Edit_Info>
              <_.Edit_Info_Label>생년월일</_.Edit_Info_Label>
              <_.Edit_Info_Input
                name="birthday"
                value={infos.birthday}
                onChange={handleBirthday}
              />
            </_.Edit_Info>
            <_.Edit_Info>
              <_.Edit_Info_Label>성별</_.Edit_Info_Label>
              <_.Edit_Info_Input
                name="gender"
                value={infos.gender}
                onChange={handleInfos}
              />
            </_.Edit_Info>
          </_.Edit_Infos>
        </_.Edit_Content>
      </_.Edit_Container>
      <NextButton text="저장하기" state={!!isFormValid() && isChanged} />
    </>
  );
};

export default Edit;
