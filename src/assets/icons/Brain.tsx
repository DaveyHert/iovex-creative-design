import * as React from "react";
import type { SVGProps } from "react";
const SvgBrain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#7868C5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5m0 0v1m0-1A3.5 3.5 0 0 0 8.5 13m3.5 4.5a3.5 3.5 0 1 0 7 0v-1.8m-7 1.8a3.5 3.5 0 1 1-7 0v-1.8"
    />
    <path
      stroke="#7868C5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 16a3.5 3.5 0 1 0 0-7H17"
    />
    <path
      stroke="#7868C5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9.3V6.5a3.5 3.5 0 1 0-7 0M6.5 16a3.5 3.5 0 1 1 0-7H7"
    />
    <path
      stroke="#7868C5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 9.3V6.5a3.5 3.5 0 1 1 7 0v10"
    />
  </svg>
);
export default SvgBrain;
