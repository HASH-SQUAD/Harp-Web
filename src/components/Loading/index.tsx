// 라이브러리
import React, { useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import Gif1 from 'assets/image/ChatGif/Gif1';
import Gif2 from 'assets/image/ChatGif/Gif2';
import Gif3 from 'assets/image/ChatGif/Gif3';
import Gif4 from 'assets/image/ChatGif/Gif4';
import Gif5 from 'assets/image/ChatGif/Gif5';
import Gif6 from 'assets/image/ChatGif/Gif6';

const Loading = () => {
  const gifComponents = [Gif1, Gif2, Gif3, Gif4, Gif5, Gif6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % gifComponents.length
      );
    }, 250);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <_.Loding_FadeComponent>
        {React.createElement(gifComponents[currentImageIndex])}
      </_.Loding_FadeComponent>
    </>
  );
};

export default Loading;
