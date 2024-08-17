import React from 'react';

interface ImageUploadProps {
  onImageSelect: (imageSrc: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            onImageSelect(reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return <button onClick={handleImageUpload}>이미지 선택</button>;
};

export default ImageUpload;
