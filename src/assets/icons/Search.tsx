import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={21}
    fill="none"
    {...props}
  >
    <g stroke="#7868C5" strokeWidth={2} filter="url(#search_svg__a)">
      <path d="M11 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path strokeLinecap="round" d="M17.674 14.718 17 14" />
    </g>
    <defs>
      <filter
        id="search_svg__a"
        width={24}
        height={24}
        x={-1}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_202_83" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_202_83"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgSearch;
