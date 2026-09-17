import type { SVGProps } from "react";

export const Ok = ({ className }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="okIconTitle"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="currentColor"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title id="okIconTitle">Ok</title>{" "}
        <polyline points="4 13 9 18 20 7"></polyline>{" "}
      </g>
    </svg>
  );
};
