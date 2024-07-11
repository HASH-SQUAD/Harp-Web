import React, { useState } from 'react';
import * as _ from './style';
import FalseCheck from 'assets/image/FalseCheck';
import TrueCheck from 'assets/image/TrueCheck';
import RightArrow from 'assets/image/RightArrow';
import DownArrow from 'assets/image/DownArrow';

interface TermsContentProps {
  id: number;
  title: string;
  detail: string;
  state: boolean;
  setState: (id: number) => void;
}

const TermsContent = ({
  id,
  title,
  detail,
  state,
  setState
}: TermsContentProps) => {
  const [ruleState, setRuleState] = useState<boolean>(false);

  return (
    <_.TermsContent_Container>
      <_.TermsContent_Layout>
        <_.TermsContent_CheckIcon
          onClick={() => {
            setState(id);
          }}
        >
          {state ? <TrueCheck /> : <FalseCheck />}
        </_.TermsContent_CheckIcon>

        <_.TermsContent_Title
          onClick={() => {
            setState(id);
          }}
        >
          {title}
        </_.TermsContent_Title>
        {ruleState ? (
          <_.TermsContent_ArrowIcon
            onClick={() => {
              setRuleState(!ruleState);
            }}
          >
            <DownArrow />
          </_.TermsContent_ArrowIcon>
        ) : (
          <_.TermsContent_ArrowIcon
            onClick={() => {
              setRuleState(!ruleState);
            }}
          >
            <RightArrow />
          </_.TermsContent_ArrowIcon>
        )}
      </_.TermsContent_Layout>

      {ruleState ? <_.TermsContent_Detail>{detail}</_.TermsContent_Detail> : ''}
    </_.TermsContent_Container>
  );
};

export default TermsContent;
