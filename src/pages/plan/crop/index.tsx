//src/pages/plan/crop/index.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';

const CropPage = () => {
  const location = useLocation();
  const { imageSrc } = location.state || {};

  useEffect(() => {
    console.log("Image Source:", imageSrc);
  }, [imageSrc]);

  if (!imageSrc) {
    return null;
  }

  return (
    <_.Crop_Layout>
      <Header title="자르기" />
      <_.Crop_Container>
        <CropImage 
          imageSrc={imageSrc} 
          cropShape="rect" 
          aspectRatio={12 / 5}
          cropSize={{ width: 360, height: 150 }} 
        />
      </_.Crop_Container>
    </_.Crop_Layout>
  );
};

export default CropPage;
