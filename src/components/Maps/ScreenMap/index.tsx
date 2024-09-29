import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import * as _ from './style';
import { theme } from 'lib/utils/style/theme';
import Marker from 'assets/image/Marker.svg';
import { PlanResult } from 'types/plan';

declare global {
  interface Window {
    kakao: any;
  }
}

interface ScreenMapProps {
  planInfos: PlanResult | null; // 초기값이 null일 수 있음
}

const ScreenMap = ({ planInfos }: ScreenMapProps) => {
  const currentOverlay = useRef<any>(null);
  const geocoder = new window.kakao.maps.services.Geocoder();
  const [selectedDay, setSelectedDay] = useState('day1');
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const createMap = useCallback(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    return new window.kakao.maps.Map(mapContainer, mapOption);
  }, []);

  const createMarkersAndPolyline = useCallback(
    (map: any, dayData: any[]) => {
      const promises = dayData.map((activity) => {
        return new Promise((resolve, reject) => {
          geocoder.addressSearch(
            activity.location,
            (result: any, status: any) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                resolve({ coords, activity });
              } else {
                reject(new Error('주소 검색 실패'));
              }
            }
          );
        });
      });

      Promise.all(promises)
        .then((results: any[]) => {
          const linePath: any[] = [];

          results.forEach(({ coords, activity }, index) => {
            linePath.push(coords);

            const imageSize = new window.kakao.maps.Size(30, 37);
            const markerImage = new window.kakao.maps.MarkerImage(
              Marker,
              imageSize
            );
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
              title: activity.recommendation,
              image: markerImage
            });

            const sequenceOverlayContent = ReactDOMServer.renderToString(
              <_.ScreenMap_Overlay>{`${index + 1}번째`}</_.ScreenMap_Overlay>
            );

            const sequenceOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: sequenceOverlayContent,
              yAnchor: 3
            });

            sequenceOverlay.setMap(map);

            const infoOverlayContent = ReactDOMServer.renderToString(
              <_.ScreenMap_InfoWindow>
                <_.ScreenMap_Header>
                  <_.ScreenMap_Title>{activity.activity}</_.ScreenMap_Title>
                  <_.ScreenMap_Time>{activity.time}</_.ScreenMap_Time>
                </_.ScreenMap_Header>
                <_.ScreenMap_Location>
                  {activity.recommendation}
                </_.ScreenMap_Location>
              </_.ScreenMap_InfoWindow>
            );

            const infoOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: infoOverlayContent,
              yAnchor: -0.2
            });

            infoOverlay.setMap(null);

            window.kakao.maps.event.addListener(marker, 'click', () => {
              if (currentOverlay.current) {
                currentOverlay.current.setMap(null);
              }
              infoOverlay.setMap(map);
              currentOverlay.current = infoOverlay;
            });

            window.kakao.maps.event.addListener(map, 'click', () => {
              if (currentOverlay.current) {
                currentOverlay.current.setMap(null);
                currentOverlay.current = null;
              }
            });

            if (index === 0) {
              map.setCenter(coords);
            }
          });

          const polyline = new window.kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 2,
            strokeColor: theme.primary[6],
            strokeOpacity: 1,
            strokeStyle: 'solid'
          });
          polyline.setMap(map);
        })
        .catch((error) => {
          console.error('마커 및 폴리라인 생성 중 에러 발생:', error);
        });
    },
    [geocoder]
  );

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('카카오 지도 API를 로드할 수 없습니다.');
      return;
    }

    if (planInfos && planInfos.data && planInfos.data.days) {
      const map = createMap();
      createMarkersAndPolyline(map, planInfos.data.days[selectedDay]);
      setLoading(false);
    }
  }, [createMap, createMarkersAndPolyline, selectedDay, planInfos]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!planInfos || !planInfos.data || !planInfos.data.days) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <_.ScreenMap_Layout id="map">
      <_.ScreenMap_DaysSelectList>
        {Object.keys(planInfos.data.days).map(
          (dayKey: string, index: number) => (
            <_.ScreenMap_DaySelect
              key={dayKey}
              isSelected={selectedDay === dayKey}
              onClick={() => setSelectedDay(dayKey)}
            >
              {index + 1}일차
            </_.ScreenMap_DaySelect>
          )
        )}
      </_.ScreenMap_DaysSelectList>
    </_.ScreenMap_Layout>
  );
};

export default ScreenMap;
