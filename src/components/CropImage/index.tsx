import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../lib/utils/cropImage';

interface CropImageProps {
  imageSrc: string;
  onComplete: (croppedImage: string) => void;
}

const CropImage: React.FC<CropImageProps> = ({ imageSrc, onComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  // 자르기 완료 후 호출되는 함수
  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  // 완료 버튼을 누르면 실행되는 함수
  const handleComplete = async () => {
    if (!croppedAreaPixels) return;

    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onComplete(croppedImage);
    } catch (error) {
      console.error('이미지 자르기 오류:', error);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={12/5}
        cropShape="rect"
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
};

export default CropImage;
