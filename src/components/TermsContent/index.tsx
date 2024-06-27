//라이브러리
import React, { useState } from 'react';

//파일
import * as _ from './style';
import FalseCheck from 'assets/image/FalseCheck';
import TrueCheck from 'assets/image/TrueCheck';
import RightArrow from 'assets/image/RightArrow';
import DownArrow from 'assets/image/DownArrow';

interface TermsContentProps {
  title: string;
  detail: string;
}

const TermsContent = ({ title, detail }: TermsContentProps) => {
  const [ruleState, setRuleState] = useState(false);
  return (
    <_.TermsContent_Container
      onClick={() => {
        setRuleState(!ruleState);
      }}
    >
      <_.TermsContent_Layout>
        <_.TermsContent_CheckIcon>
          {ruleState ? <TrueCheck /> : <FalseCheck />}
        </_.TermsContent_CheckIcon>

        <_.TermsContent_Title>{title}</_.TermsContent_Title>

        {ruleState ? (
          <_.TermsContent_ArrowIcon>
            <DownArrow />
          </_.TermsContent_ArrowIcon>
        ) : (
          <_.TermsContent_ArrowIcon>
            <RightArrow />
          </_.TermsContent_ArrowIcon>
        )}
      </_.TermsContent_Layout>

      {ruleState ? <_.TermsContent_Detail>{detail}</_.TermsContent_Detail> : ''}
    </_.TermsContent_Container>
  );
};

export default TermsContent;
