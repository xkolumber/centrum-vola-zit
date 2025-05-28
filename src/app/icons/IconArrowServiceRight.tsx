import React from "react";

interface Props {
  color?: string;
}

const IconArrowServiceRight = ({ color }: Props) => {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 cursor-pointer hover:scale-[1.05] duration-200 z-10"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.6967 54.6967C72.6256 51.7678 77.3744 51.7678 80.3033 54.6967L110.303 84.6967C113.232 87.6256 113.232 92.3744 110.303 95.3033L80.3033 125.303C77.3744 128.232 72.6256 128.232 69.6967 125.303C66.7678 122.374 66.7678 117.626 69.6967 114.697L94.3934 90L69.6967 65.3033C66.7678 62.3744 66.7678 57.6256 69.6967 54.6967Z"
        fill={color ? color : "#ffffff"}
      />
    </svg>
  );
};

export default IconArrowServiceRight;
