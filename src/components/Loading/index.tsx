import React, { useEffect, useState } from 'react';
import * as _ from './style';
import g1 from '../../assets/image/ChatGif/g1.svg';
import g2 from '../../assets/image/ChatGif/g2.svg';
import g3 from '../../assets/image/ChatGif/g3.svg';
import g4 from '../../assets/image/ChatGif/g4.svg';
import g5 from '../../assets/image/ChatGif/g5.svg';
import g6 from '../../assets/image/ChatGif/g6.svg';

const Loading = () => {
  const gifImages = [g1, g2, g3, g4, g5, g6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % gifImages.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <_.Loding_FadeImage src={gifImages[currentImageIndex]} />
    </>
  );
};

export default Loading;
