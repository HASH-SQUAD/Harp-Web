// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import { useBottomSheet } from 'hooks/useBottomSheet';

const BottomSheet = () => {
  const { sheet } = useBottomSheet();
  return (
    <_.BottomSheet_Layout ref={sheet}>
      <_.BottomSheet_Wrapper>
        <_.BottomSheet_Handle />
      </_.BottomSheet_Wrapper>
    </_.BottomSheet_Layout>
  );
};

export default BottomSheet;
