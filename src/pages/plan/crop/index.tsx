import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CropImage } from 'components/CropImage';
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
    navigate('/plan/info/1', { state: { croppedImage } });
  };


  return (
    <_.Crop_Layout>
      <Header title="자르기" />
      <_.Crop_Container>
        <CropImage 
          imageSrc={imageSrc} 
          cropShape="rect" 
          aspectRatio={12 / 5} 
          nextPagePath="/plan/info/:id"
          onCropComplete={handleCropComplete}
        />
      </_.Crop_Container>
    </_.Crop_Layout>
  );
};

export default CropPage;
