// 라이브러리
import React, { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import { formatBirthday } from 'lib/utils/formatBirthday';
import { isGenderSelectedState, userInfosState } from 'atoms/user';

const UserInfo = () => {
  const navigate = useNavigate();
  const title = '환영합니다!\n회원정보를 입력해주세요.';
  const birthdayRef = useRef<HTMLInputElement | null>(null);

  const [userInfos, setUserInfos] = useRecoilState(userInfosState);
  const [isSelected, setIsSelected] = useRecoilState(isGenderSelectedState);

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, username: e.currentTarget.value });
  };

  const handleBirthday = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedBirthday = formatBirthday(e.currentTarget.value);
    setUserInfos({ ...userInfos, birthday: formattedBirthday });
  };

  const handleGenderBox = (selectedGender: string) => {
    setUserInfos({ ...userInfos, gender: selectedGender });
    setIsSelected({
      female: selectedGender === 'female',
      male: selectedGender === 'male'
    });
  };

  const isFormValid = () => {
    const { username, birthday, gender } = userInfos;
    return username.length >= 2 && birthday && gender;
  };

  return (
    <_.UserInfo_Container>
      <Header />
      <_.UserInfo_Content>
        <_.UserInfo_Title_Layout>
          <_.UserInfo_Title_Big>{title}</_.UserInfo_Title_Big>
          <_.UserInfo_Title_Small>
            하프 서비스 이용을 위해 활용됩니다.
          </_.UserInfo_Title_Small>
        </_.UserInfo_Title_Layout>
        <_.UserInfo_Inputs>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              여행자 닉네임
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Input_Box
              type="text"
              placeholder="2글자 이상 입력해주세요."
              onChange={handleUserName}
              value={userInfos.username}
              autoComplete="off"
            />
          </_.UserInfo_Input_Layout>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              생년월일
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Input_Box
              type="text"
              placeholder="2024/01/01"
              value={userInfos.birthday}
              onChange={handleBirthday}
              ref={birthdayRef}
              pattern="\d*"
            />
          </_.UserInfo_Input_Layout>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              성별 <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Gender_Box>
              <_.UserInfo_Gender
                isSelected={isSelected.female}
                onClick={() => handleGenderBox('female')}
              >
                여성
              </_.UserInfo_Gender>
              <_.UserInfo_Gender
                isSelected={isSelected.male}
                onClick={() => handleGenderBox('male')}
              >
                남성
              </_.UserInfo_Gender>
            </_.UserInfo_Gender_Box>
          </_.UserInfo_Input_Layout>
        </_.UserInfo_Inputs>
      </_.UserInfo_Content>
      <NextButton
        text="다음"
        state={!!isFormValid()}
        onNextClick={() => {
          navigate('/register/surveystyle');
        }}
      />
    </_.UserInfo_Container>
  );
};

export default UserInfo;
