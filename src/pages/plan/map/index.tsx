// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import ScreenMap from 'components/Maps/ScreenMap';
import BottomSheet from 'components/BottomSheet';

const Map = () => {
  return (
    <_.Map_Layout>
      <Header title="지도" buttonState="완료" />
      <ScreenMap />
      <BottomSheet />
    </_.Map_Layout>
  );
};

export default Map;
