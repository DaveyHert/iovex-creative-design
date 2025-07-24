import * as React from "react";
import type { SVGProps } from "react";
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.72 13.88-1.222.412a1.13 1.13 0 0 0-.72.72l-.413 1.223c-.352 1.057-1.837 1.035-2.167-.023L9.81 11.75c-.27-.885.548-1.71 1.425-1.433l4.47 1.388c1.05.33 1.065 1.822.015 2.175"
    />
    <path
      stroke="#AEAEB8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 9.5C16.5 5.36 13.14 2 9 2S1.5 5.36 1.5 9.5 4.86 17 9 17"
    />
  </svg>
);
export default SvgChart;
