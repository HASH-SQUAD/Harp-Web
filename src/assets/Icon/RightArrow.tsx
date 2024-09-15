interface RightArrowProps {
  width: string;
  height: string;
  color: string;
}

const RightArrow = ({ width, height, color }: RightArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8 5.25L11.75 9L8 12.75"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
