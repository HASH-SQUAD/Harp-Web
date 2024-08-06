import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import * as _ from './style';

const CropPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageSrc } = location.state || {};
  const croppedImageRef = useRef<string | null>(null);

  if (!imageSrc) {
    navigate(-1);
    return null;
  }

  const handleCropComplete = (croppedImage: string) => {
    croppedImageRef.current = croppedImage;
  };

  const handleNextClick = () => {
    if (croppedImageRef.current) {
      navigate('/plan/info/:id', { state: { croppedImage: croppedImageRef.current } });
    }
  };

  return (
    <_.Crop_Layout>
      <Header title="자르기" />
      <_.Crop_Container>
        <CropImage 
          imageSrc={imageSrc} 
          onComplete={handleCropComplete} 
          cropShape="rect" 
          aspectRatio={12 / 5}
          cropSize={{ width: 360, height: 150 }} 
        />
      </_.Crop_Container>
      
      <NextButton text="완료" state={true} onClick={handleNextClick} />
    </_.Crop_Layout>
  );
};

export default CropPage;
