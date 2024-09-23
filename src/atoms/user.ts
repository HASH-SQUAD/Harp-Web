import SurveyFoodData from 'data/SurveyFood';
import SurveyStyleData from 'data/SurveyStyle';
import { atom } from 'recoil';

// 이용약관
export const successAllState = atom<boolean>({
  key: 'successAllState',
  default: false
});

export interface CheckState {
  [key: number]: boolean;
}

export const checkState = atom<CheckState>({
  key: 'checkState',
  default: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  }
});

export const nextButtonState = atom<boolean>({
  key: 'nextButtonState',
  default: false
});

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
export const selectedStylesState = atom({
  key: 'selectedStylesState',
  default: {
    styles: SurveyStyleData.map((item) => ({
      id: item.id,
      state: false,
      text: item.text
    }))
  }
});

export const selectedStylesStringState = atom({
  key: 'selectedStylesStringState',
  default: ''
});

// 선호 음식
export const selectedFoodsState = atom({
  key: 'selectedFoodsState',
  default: {
    foods: SurveyFoodData.map((item) => ({
      id: item.id,
      state: false,
      text: item.text
    }))
  }
});

export const selectedFoodsStringState = atom({
  key: 'selectedFoodsStringState',
  default: ''
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
