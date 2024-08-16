// 라이브러리
import React, { useEffect } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const positions = [
      {
        title: '카카오',
        latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
        title: '생태연못',
        latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
        title: '텃밭',
        latlng: new window.kakao.maps.LatLng(33.450879, 126.56994)
      },
      {
        title: '근린공원',
        latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];

    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    positions.forEach((position) => {
      const imageSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize
      );
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: position.latlng,
        title: position.title,
        image: markerImage
      });
    });
  }, []);

  return (
    <>
      <Header title="지도" buttonState="완료" />
      <_.Map_Layout id="map"></_.Map_Layout>
    </>
  );
};

export default Map;
