import React from 'react';

interface SendProps {
  stroke: string;
}

const Send = ({ stroke }: SendProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.7452 7.26411L9.65909 14.4259L1.59958 9.38502C0.444827 8.66255 0.685036 6.90853 1.99117 6.52657L21.1266 0.922753C22.3226 0.5722 23.4311 1.69045 23.0758 2.89037L17.4146 22.0124C17.0267 23.3204 15.2827 23.5541 14.5671 22.3944L9.65533 14.4272"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Send;
