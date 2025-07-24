import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={7}
    fill="none"
    {...props}
  >
    <g clipPath="url(#arrow-up_svg__a)">
      <path
        fill="#038E00"
        d="m4.952 2.85-.205.205L1.45 6.352c-.222.223-.485.271-.747.15-.253-.119-.392-.336-.355-.6A.96.96 0 0 1 .604 5.4c1.063-1.082 2.14-2.15 3.212-3.223l.204-.203a2 2 0 0 0-.198-.023c-.43-.002-.86.002-1.29-.003-.34-.004-.576-.238-.58-.564-.005-.355.208-.593.564-.595Q4 .775 5.482.785c.4.002.625.218.632.613q.027 1.47.032 2.943c.002.36-.232.57-.59.568-.337-.003-.558-.22-.569-.57-.01-.414-.011-.829-.018-1.244 0-.065-.01-.13-.017-.246"
      />
    </g>
    <defs>
      <clipPath id="arrow-up_svg__a">
        <path fill="#fff" d="M0 0h7v7H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUp;
