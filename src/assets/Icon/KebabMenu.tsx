import React from 'react';

interface KebabMenuProps {
  onClick: () => void;
}

const KebabMenu = ({ onClick }: KebabMenuProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="16"
      viewBox="0 0 3 16"
      fill="none"
      onClick={onClick}
    >
      <circle cx="1.5" cy="2" r="1.5" fill="#BCBCBC" />
      <circle cx="1.5" cy="8" r="1.5" fill="#BCBCBC" />
      <circle cx="1.5" cy="14" r="1.5" fill="#BCBCBC" />
    </svg>
  );
};

export default KebabMenu;
