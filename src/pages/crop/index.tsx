import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';
import NextButton from 'components/NextButton';

const CropPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageSrc, onComplete } = location.state || {};

  if (!imageSrc) {
    navigate(-1);
    return null;
  }

  const handleCropComplete = (croppedImage: string) => {
  navigate('/plan/info/:id', { state: { croppedImage } });
  };

  return (
    <_.Crop_Layout>
      <Header title="자르기" />
      <_.Crop_Container>
        <CropImage imageSrc={imageSrc} onComplete={handleCropComplete} />
      </_.Crop_Container>
      <NextButton text="완료" state={true} onClick={() => handleCropComplete('')} />
    </_.Crop_Layout>
  );
};

export default CropPage;
