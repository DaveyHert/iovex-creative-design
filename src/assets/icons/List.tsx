import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#AEAEB8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 15.125h7.5m-7.5-5.25h7.5m-7.5-5.25h7.5m-13.5 0 .75.75 2.25-2.25m-3 6.75.75.75 2.25-2.25m-3 6.75.75.75 2.25-2.25"
    />
  </svg>
);
export default SvgList;
