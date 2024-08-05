import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';

const CropPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageSrc } = location.state || {};

  if (!imageSrc) {
    return null;
  }

  const handleCropComplete = (croppedImage: string) => {
    navigate('/profile/edit', { state: { croppedImage } });
  };

  return (
    <_.Crop_Layout>
      <Header title="자르기" />
      <_.Crop_Container>
        <CropImage 
          imageSrc={imageSrc} 
          cropShape="round" 
          aspectRatio={1 / 1}
          nextPagePath="/profile/edit"
          onCropComplete={handleCropComplete}
        />
      </_.Crop_Container>
    </_.Crop_Layout>
  );
};

export default CropPage;
