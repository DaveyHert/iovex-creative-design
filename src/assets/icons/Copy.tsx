import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#7868C5"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.078 6H8.672A2.67 2.67 0 0 0 6 8.672v10.406a2.67 2.67 0 0 0 2.672 2.672h10.406a2.67 2.67 0 0 0 2.672-2.672V8.672A2.67 2.67 0 0 0 19.078 6Z"
    />
    <path
      stroke="#7868C5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.977 6 18 4.875a2.633 2.633 0 0 0-2.625-2.625H5.25a3.01 3.01 0 0 0-3 3v10.125A2.633 2.633 0 0 0 4.875 18H6"
    />
  </svg>
);
export default SvgCopy;
