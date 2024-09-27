// 라이브러리
import React, { useCallback, useEffect, useState } from 'react';

// 파일
import * as _ from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MiniMapProps {
  keyword: string;
}

interface Place {
  x: string;
  y: string;
}

const MiniMap = ({ keyword }: MiniMapProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const searchPlace = useCallback(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(0, 0),
      level: 3
    };
    const map = new window.kakao.maps.Map(container, options);

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data: Place[], status: string) => {
      if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
        const place = data[0];
        const location = new window.kakao.maps.LatLng(place.y, place.x);
        map.setCenter(location);
        setErrorMessage(null);
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        console.error('해당 키워드에 대한 결과가 없습니다.');
        setErrorMessage('해당 키워드에 대한 결과가 없습니다.');
      } else {
        console.error('지도 데이터를 로드하는 중 오류가 발생했습니다.');
        setErrorMessage('지도 데이터를 로드하는 중 오류가 발생했습니다.');
      }
    });
  }, [keyword]);

  useEffect(() => {
    if (window.kakao) {
      searchPlace();
    } else {
      console.log('카카오맵 스크립트 에러');
    }
  }, [searchPlace]);

  return (
    <>
      <_.MiniMap_Layout id="map" style={{ width: '100%', height: '400px' }} />
      {errorMessage && <_.MiniMap_Error>{errorMessage}</_.MiniMap_Error>}
    </>
  );
};

export default MiniMap;
