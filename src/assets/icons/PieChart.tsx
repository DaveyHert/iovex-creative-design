import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M20 15.552a9.215 9.215 0 0 1-15.302 3.75A9.21 9.21 0 0 1 3.785 7.34 9.2 9.2 0 0 1 8.448 4"
    />
    <path
      stroke="#7868C5"
      strokeWidth={1.5}
      d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.409 2.674-3.052Z"
    />
  </svg>
);
export default SvgPieChart;
