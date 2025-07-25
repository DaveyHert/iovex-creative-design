import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#7868C5"
      d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12q0-2.926-2.037-4.962T12 5a6.75 6.75 0 0 0-3.225.8A7.4 7.4 0 0 0 6.25 8H9v2H3V4h2v2.35a8.7 8.7 0 0 1 3.113-2.475A8.9 8.9 0 0 1 12 3q1.875 0 3.513.713a9.2 9.2 0 0 1 2.85 1.924 9.1 9.1 0 0 1 1.925 2.85A8.7 8.7 0 0 1 21 12q0 1.874-.712 3.513a9.1 9.1 0 0 1-1.925 2.85 9.2 9.2 0 0 1-2.85 1.925A8.7 8.7 0 0 1 12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"
    />
  </svg>
);
export default SvgHistory;
