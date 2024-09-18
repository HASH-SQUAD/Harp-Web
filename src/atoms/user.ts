import SurveyFoodData from 'data/SurveyFood';
import SurveyStyleData from 'data/SurveyStyle';
import { atom } from 'recoil';

// 사용자 정보
export const userInfosState = atom({
  key: 'userInfosState',
  default: {
    username: '',
    birthday: '',
    gender: ''
  }
});

export const isGenderSelectedState = atom({
  key: 'isGenderSelectedState',
  default: {
    female: false,
    male: false
  }
});

// 여행 스타일
export const checkedStylesState = atom({
  key: 'checkedStylesState',
  default: {
    styles: SurveyStyleData.map((item) => ({ id: item.id, state: false }))
  }
});

// 선호 음식
export const checkedFoodsState = atom({
  key: 'checkedFoodsState',
  default: {
    foods: SurveyFoodData.map((item) => ({ id: item.id, state: false }))
  }
});

// mbti
export const selectedMBTIState = atom({
  key: 'selectedMBTIState',
  default: {
    mbti: [
      { id: 1, left: 'E', right: 'I', text: '내향형 / 외향형', state: false },
      { id: 2, left: 'S', right: 'N', text: '직관형 / 감각형', state: false },
      { id: 3, left: 'T', right: 'F', text: '사고형 / 감정형', state: false },
      { id: 4, left: 'P', right: 'J', text: '인식형 / 판단형', state: false }
    ]
  }
});

export const stringMbtiState = atom({
  key: 'stringMbtiState',
  default: ''
});

// tmi
export const tmiState = atom({
  key: 'tmiState',
  default: ''
});
