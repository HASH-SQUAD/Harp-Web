import React, { useState } from 'react';
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import SurveyContent from 'components/SurveyContent';
import SurveyStyleData from 'data/SurveyStyle';
import NextButton from 'components/NextButton';

const SurveyStyle = () => {
  const statusBarHeight = useStatusBarHeight();
  const [checkState, setCheckState] = useState(
    SurveyStyleData.map((item) => ({ id: item.id, state: false }))
  );

  const handleToggle = (id: number) => {
    const selectedCount = checkState.filter((item) => item.state).length;
    const isItemSelected = checkState.find((item) => item.id === id)?.state;

    if (isItemSelected) {
      setCheckState((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, state: !item.state } : item
        )
      );
    } else if (selectedCount < 3) {
      setCheckState((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, state: !item.state } : item
        )
      );
    }
  };

  return (
    <_.SurveyStyle_Container>
      <_.SurveyStyle_Layout StatusBarSize={`${statusBarHeight}px`}>
        <Header
          title=""
          StatusBar={1}
          buttonState=""
          onClickMethod={() => {
            return;
          }}
        />

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
            const currentItem = checkState.find(
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
        <NextButton text="다음" state={true} />
      </_.SurveyStyle_Layout>
    </_.SurveyStyle_Container>
  );
};

export default SurveyStyle;
