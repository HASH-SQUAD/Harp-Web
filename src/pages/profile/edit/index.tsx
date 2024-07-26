import React, { ChangeEvent, useCallback, useState } from 'react';
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import DefaultImg from 'assets/image/DefaultProfile.png';
import ProfileEdit from 'assets/Icon/ProfileEdit';
import EmailCopy from 'assets/Icon/EmialCopy';
import NextButton from 'components/NextButton';
import { formatBirthday } from 'lib/utils/formatBirthday';
import { handleImageEdit } from 'lib/utils/handleImageEdit';

const Edit = () => {
  const statusBarHeight = useStatusBarHeight();

  const initialInfos = {
    email: 'abcd1234@gmail.com',
    username: '탐험가 고릴라',
    birthday: '2007/07/18',
    gender: '여자'
  };

  const [infos, setInfos] = useState(initialInfos);
  const [isChanged, setIsChanged] = useState(false);
  const [profileImage, setProfileImage] = useState(DefaultImg);

  const handleInfos = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    const newValue = name === 'birthday' ? formatBirthday(value) : value;

    setInfos((prevInfos) => {
      const newInfos = { ...prevInfos, [name]: newValue };
      setIsChanged(JSON.stringify(newInfos) !== JSON.stringify(initialInfos));
      return newInfos;
    });
  }, []);

  const handleEmailCopy = useCallback(() => {
    navigator.clipboard
      .writeText(initialInfos.email)
      .then(() => {
        alert('이메일이 복사되었습니다.');
      })
      .catch((err) => {
        console.error('이메일 복사에 실패했습니다.', err);
      });
  }, [initialInfos.email]);

  const isFormValid = useCallback(() => {
    const { username, birthday, gender } = infos;
    return (
      username.length >= 2 &&
      birthday &&
      (gender === '남자' || gender === '여자')
    );
  }, [infos]);

  return (
    <>
      <_.Edit_Container StatusBarSize={`${statusBarHeight}px`}>
        <Header title="회원 정보 수정" />
        <_.Edit_Content>
          <_.Edit_Profile>
            <_.Edit_Profile_Img src={profileImage} alt="프로필 이미지" />
            <_.Edit_Profile_Edit
              onClick={() => handleImageEdit(setProfileImage)}
            >
              <ProfileEdit />
            </_.Edit_Profile_Edit>
          </_.Edit_Profile>
          <_.Edit_Infos>
            <_.Edit_Info>
              <_.Edit_Info_Label>이메일</_.Edit_Info_Label>
              <_.Edit_Info_Email>
                {initialInfos.email}
                <EmailCopy onClick={handleEmailCopy} />
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
                onChange={handleInfos}
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
