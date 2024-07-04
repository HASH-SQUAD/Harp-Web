// 라이브러리
import React, { useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import NextButton from 'components/NextButton';

const SurveryTMI = () => {
  const [tmi, setTmi] = useState('');

  return (
    <_.TMI_Container>
      <_.TMI_Layout>
        <Header
          StatusBar={0}
          title=""
          buttonState=""
          onClickMethod={() => {}}
        />
        <_.TMI_Title>
          <_.TMI_Title_Emoticon>🤔</_.TMI_Title_Emoticon>
          <_.TMI_Title_Big>당신에 대해 알려주세요!</_.TMI_Title_Big>
          <_.TMI_Title_Small>
            하프 서비스 이용을 위해 활용됩니다.
          </_.TMI_Title_Small>
        </_.TMI_Title>
        <_.TMI_Textarea
          onChange={(e) => {
            setTmi(e.currentTarget.value);
          }}
          maxLength={200}
          placeholder="ex) 고등어를 싫어해요"
        />
        <_.TMI_Text_Limit>{tmi.length}/200</_.TMI_Text_Limit>
        <NextButton text="다음" state={true} />
      </_.TMI_Layout>
    </_.TMI_Container>
  );
};

export default SurveryTMI;
