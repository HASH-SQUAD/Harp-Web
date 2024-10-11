import React from 'react';
import { theme } from 'lib/utils/style/theme';

const Calendar = ({ color }: { color?: string }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Calendar">
        <path
          id="Line_200"
          d="M1.57715 7.83688H16.4304"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_201"
          d="M12.7015 11.0914H12.7092"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_202"
          d="M9.00421 11.0914H9.01193"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_203"
          d="M5.29816 11.0914H5.30588"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_204"
          d="M12.7015 14.3302H12.7092"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_205"
          d="M9.00421 14.3302H9.01193"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_206"
          d="M5.29816 14.3302H5.30588"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_207"
          d="M12.3694 1.66666V4.40897"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_208"
          d="M5.63795 1.66666V4.40897"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5319 2.98267H5.4758C3.02856 2.98267 1.5 4.34594 1.5 6.85185V14.3932C1.5 16.9385 3.02856 18.3333 5.4758 18.3333H12.5242C14.9791 18.3333 16.5 16.9622 16.5 14.4563V6.85185C16.5077 4.34594 14.9868 2.98267 12.5319 2.98267Z"
          stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Calendar;
