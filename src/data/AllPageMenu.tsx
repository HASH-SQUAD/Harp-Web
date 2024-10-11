import Calendar from 'assets/image/Calendar';
import Heart from 'assets/image/Heart';

import Event from 'assets/image/Event';
import HeadPhone from 'assets/image/HeadPhone';

import Lock from 'assets/image/Lock';
import LoudSpeaker from 'assets/image/LoudSpeaker';
import Paper from 'assets/image/Paper';

export const AllPageMenu = [
  {
    category: '내 활동',
    menus: [
      { icon: <Calendar color="gray" />, title: '지난 일정' },
      { icon: <Heart />, title: '관심 목록' }
    ]
  },
  {
    category: '소식',
    menus: [
      { icon: <Event />, title: '이벤트' },
      { icon: <LoudSpeaker />, title: '공지 사항' }
    ]
  },
  {
    category: '도움말',
    menus: [
      { icon: <HeadPhone />, title: '고객센터' },
      { icon: <Paper />, title: '약관 및 개인정보 처리 동의' },
      { icon: <Lock />, title: '개인정보 처리방침' }
    ]
  }
];
