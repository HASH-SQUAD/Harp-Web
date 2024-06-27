//라이브러리
import React, { useState } from 'react';

//파일
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import * as _ from './style';
import Header from 'components/Header';
import FalseCircleCheck from 'assets/image/FalseCircleCheck';
import TrueCircleCheck from 'assets/image/TrueCircleCheck';
import TermsContent from 'components/TermsContent';
import TermsData from '../../data/Terms';
import NextButton from 'components/NextButton';

const Terms = () => {
  const statusBarHeight = useStatusBarHeight();
  const [successAll, setSuccessAll] = useState(false);

  return (
    <_.Terms_Container>
      <_.Terms_Layout StatusBarSize={`${statusBarHeight}px`}>
        <_.Header_Layout>
          <Header
            StatusBar={0}
            title=""
            buttonState=""
            onClickMethod={() => {
              return 0;
            }}
          />
        </_.Header_Layout>

        <_.Terms_Title>서비스 이용을 위해</_.Terms_Title>

        <_.Terms_SubTitle>
          <_.Terms_SubTitle_Highlight>이용약관 동의</_.Terms_SubTitle_Highlight>
          가 필요합니다.
        </_.Terms_SubTitle>

        <_.Terms_SuccessAll>
          {successAll ? (
            <_.TrueCircleCheckIcon
              onClick={() => {
                setSuccessAll(!successAll);
              }}
            >
              <TrueCircleCheck />
            </_.TrueCircleCheckIcon>
          ) : (
            <_.TrueCircleCheckIcon
              onClick={() => {
                setSuccessAll(!successAll);
              }}
            >
              <FalseCircleCheck />
            </_.TrueCircleCheckIcon>
          )}
          약관 전체 동의
        </_.Terms_SuccessAll>

        <_.Terms_Deatil>
          {TermsData.map((item) => (
            <TermsContent
              key={item.title}
              title={item.title}
              detail={item.desc}
            />
          ))}
        </_.Terms_Deatil>

        <NextButton text="다음" state={true} />
      </_.Terms_Layout>
    </_.Terms_Container>
  );
};

export default Terms;
