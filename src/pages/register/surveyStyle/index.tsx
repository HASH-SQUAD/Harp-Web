// 라이브러리
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import SurveyContent from 'components/SurveyContent';
import SurveyStyleData from 'data/SurveyStyle';
import NextButton from 'components/NextButton';
import { checkedStylesState } from 'atoms/user';
import { useNavigate } from 'react-router-dom';

const SurveyStyle = () => {
  const navigate = useNavigate();
  const [checkedStyles, setCheckedStyles] = useRecoilState(checkedStylesState);

  const handleToggle = (id: number) => {
    setCheckedStyles((prevState) => {
      const selectedCount = prevState.styles.filter(
        (item) => item.state
      ).length;

      const isItemSelected = prevState.styles.find(
        (item) => item.id === id
      )?.state;

      if (isItemSelected) {
        return {
          styles: prevState.styles.map((item) =>
            item.id === id ? { ...item, state: !item.state } : item
          )
        };
      } else if (selectedCount < 3) {
        return {
          styles: prevState.styles.map((item) =>
            item.id === id ? { ...item, state: !item.state } : item
          )
        };
      }
      return prevState;
    });
  };

  const isFormValid = () => {
    const selectedCount = checkedStyles.styles.filter(
      (item) => item.state
    ).length;
    return selectedCount >= 1;
  };

  return (
    <_.SurveyStyle_Container>
      <Header title="1" />
      <_.SurveyStyle_Content>
        <_.SurveyStyle_ProgressText>1/3</_.SurveyStyle_ProgressText>
        <_.SurveyStyle_MainText>
          좋아하는 여행 유형을
          <br /> 골라보세요.
          <_.SurveyStyle_SubText>
            최대 3개까지 선택할 수 있어요!
          </_.SurveyStyle_SubText>
        </_.SurveyStyle_MainText>
        <_.SurveyStyle_Contents>
          {SurveyStyleData.map((item) => {
            const currentItem = checkedStyles.styles.find(
              (stateItem) => stateItem.id === item.id
            );
            const state = currentItem ? currentItem.state : false;

            return (
              <SurveyContent
                key={item.id}
                width={100}
                text={item.text}
                img={item.img}
                state={state}
                onClick={() => handleToggle(item.id)}
              />
            );
          })}
        </_.SurveyStyle_Contents>
      </_.SurveyStyle_Content>
      <NextButton
        text="다음"
        state={!!isFormValid()}
        onNextClick={() => {
          navigate('/register/surveyfood');
        }}
      />
    </_.SurveyStyle_Container>
  );
};

export default SurveyStyle;
