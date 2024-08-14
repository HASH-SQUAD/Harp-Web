// src/components/CropImage/index.tsx

import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../lib/utils/cropImage';
import NextButton from 'components/NextButton';
import { useNavigate } from 'react-router-dom';
import { CropImageProps } from '../../types/cropImage';

const CropImage = ({ imageSrc, cropShape, aspectRatio, cropSize }: CropImageProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const navigate = useNavigate();

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleComplete = async () => {
    const id = 1;
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        navigate(`/plan/info/${id}`, { state: { croppedImage } }); // 1이라는 ID로 교체
      } catch (error) {
        console.error('이미지 자르기 오류:', error);
      }
    }
  };
  

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={aspectRatio}
        cropShape={cropShape}
        cropSize={cropSize}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
      <NextButton text="완료" state={true} onClick={handleComplete} />
    </div>
  );
};

export default CropImage;
