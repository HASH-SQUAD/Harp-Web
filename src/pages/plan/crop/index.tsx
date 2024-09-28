// 라이브러리
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// 파일
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';

const CropPage = () => {
  const id = useParams().id;
  const location = useLocation();
  const navigate = useNavigate();
  const { imageSrc } = location.state || {};

  if (!imageSrc) {
    throw new Error('올바른 이미지가 제공되지 않았습니다.');
  }

  const handleCropComplete = (croppedImage: string) => {
    navigate(`/plan/info/${id}`, { state: { croppedImage } });
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
