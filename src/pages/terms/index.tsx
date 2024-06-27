//라이브러리
import React from 'react';

//파일
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import * as _ from './style';
import Header from 'components/Header';

const Terms = () => {
  const statusBarHeight = useStatusBarHeight();

  return (
    <_.Terms_Container>
      <_.Terms_Layout StatusBarSize={`${statusBarHeight}px`}>
        <_.Header_Layout>
          <Header
            StatusBar={0}
            title="일정"
            buttonState="닫기"
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
					
				</_.Terms_SuccessAll>

      </_.Terms_Layout>
    </_.Terms_Container>
  );
};

export default Terms;
