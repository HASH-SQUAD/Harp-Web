import React from 'react';

interface ShareProps {
  color?: string;
}

const Share = ({ color = '#1A1E27' }: ShareProps) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Regular/Light/Upload">
        <g id="Upload">
          <path
            id="Stroke 1"
            d="M5.5426 7.23802H4.84285C3.3166 7.23802 2.0791 8.47552 2.0791 10.0018L2.0791 13.658C2.0791 15.1835 3.3166 16.421 4.84285 16.421H13.1904C14.7166 16.421 15.9541 15.1835 15.9541 13.658V9.99427C15.9541 8.47252 14.7204 7.23802 13.1986 7.23802H12.4914"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 3"
            d="M9.0166 2.14289V11.1736"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 5"
            d="M6.83008 4.33911L9.01633 2.14311L11.2033 4.33911"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Share;
