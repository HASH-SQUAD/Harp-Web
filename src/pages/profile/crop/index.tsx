// 라이브러리
import { useLocation, useNavigate } from 'react-router-dom';

// 파일
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';
import NotFound from 'pages/notFound';

const CropPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageSrc } = location.state || {};

  if (!imageSrc) {
    return <NotFound />;
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
