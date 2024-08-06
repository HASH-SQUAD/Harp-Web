import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
import { getCroppedImg } from '../../lib/utils/cropImage';
import NextButton from 'components/NextButton';
import { useNavigate } from 'react-router-dom';

interface CropImageProps {
  imageSrc: string;
  cropShape: 'rect' | 'round';
  aspectRatio: number;
  cropSize: { width: number, height: number };
}

const CropImage: React.FC<CropImageProps> = ({ imageSrc, cropShape, aspectRatio, cropSize }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const navigate = useNavigate();

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleComplete = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        navigate('/plan/info/:id', { state: { croppedImage } });
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
