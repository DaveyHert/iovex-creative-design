import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={10}
    fill='none'
    {...props}
  >
    <path
      fill='#7868C5'
      fillRule='evenodd'
      d='M7.026.232A1 1 0 0 1 8.435.36l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4A1 1 0 0 1 7.026.232'
      clipRule='evenodd'
    />
    <path
      fill='#7868C5'
      fillRule='evenodd'
      d='M7.026 9.767a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128'
      clipRule='evenodd'
    />
    <path
      fill='#7868C5'
      fillRule='evenodd'
      d='M10 5a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowRight;
