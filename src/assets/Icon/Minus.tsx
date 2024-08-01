import React from 'react';

const Minus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g filter="url(#filter0_d_3174_13405)">
        <rect x="8" y="6" width="16" height="16" rx="8" fill="white" />
        <path
          d="M12 14H20"
          stroke="#A5A5A5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3174_13405"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3174_13405"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3174_13405"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Minus;
