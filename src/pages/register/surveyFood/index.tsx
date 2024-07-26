//라이브러리
import React, { useState, useEffect } from 'react';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import SurveyFoodData from 'data/SurveyFood';
import SurveyContent from 'components/SurveyContent';
import NextButton from 'components/NextButton';

const SurveyFood = () => {
  const statusBarHeight = useStatusBarHeight();
  const [checkState, setCheckState] = useState(
    SurveyFoodData.map((item) => ({ id: item.id, state: false }))
  );
  const [nextButtonState, setNextButtonState] = useState(false);

  const handleToggle = (id: number) => {
    const selectedCount = checkState.filter((item) => item.state).length;
    const isItemSelected = checkState.find((item) => item.id === id)?.state;

    if (isItemSelected) {
      setCheckState((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, state: !item.state } : item
        )
      );
    } else if (selectedCount < 2) {
      setCheckState((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, state: !item.state } : item
        )
      );
    }
  };

  useEffect(() => {
    const selectedCount = checkState.filter((item) => item.state).length;
    setNextButtonState(selectedCount > 0);
  }, [checkState]);

  return (
    <>
      <_.SurveyFood_Container StatusBarSize={`${statusBarHeight}px`}>
        <Header title="2" />
        <_.SurveyFood_ProgressText>2/3</_.SurveyFood_ProgressText>
        <_.SurveyFood_MainText>
          당신의 음식 취향을
          <br />
          알려주세요.
          <_.SurveyFood_SubText>
            최대 2개까지 선택할 수 있어요!
          </_.SurveyFood_SubText>
        </_.SurveyFood_MainText>

        <_.SurveyFood_Contents>
          {SurveyFoodData.map((item) => {
            const currentItem = checkState.find(
              (stateItem) => stateItem.id === item.id
            );
            const state = currentItem ? currentItem.state : false;

            return (
              <SurveyContent
                key={item.id}
                width={150}
                text={item.text}
                img={item.img}
                state={state}
                onClick={() => handleToggle(item.id)}
              />
            );
          })}
        </_.SurveyFood_Contents>
      </_.SurveyFood_Container>
      <NextButton text="다음" state={nextButtonState} />
    </>
  );
};

export default SurveyFood;
