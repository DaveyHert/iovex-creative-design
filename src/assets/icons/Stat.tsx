import * as React from "react";
import type { SVGProps } from "react";
const SvgStat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={67}
    height={38}
    fill="none"
    {...props}
  >
    <g clipPath="url(#stat_svg__a)">
      <path
        fill="#28204B"
        d="M33.811 36.527a1 1 0 0 1-1.476 0L26.82 30.49c-.586-.64-.13-1.674.739-1.674h11.026c.87 0 1.325 1.033.739 1.674z"
      />
      <path
        fill="#28204B"
        stroke="url(#stat_svg__b)"
        strokeOpacity={0.1}
        strokeWidth={0.938}
        d="M33.465 36.212a.533.533 0 0 1-.784 0l-5.514-6.037a.532.532 0 0 1 .393-.89h11.026c.462 0 .704.55.392.89z"
      />
      <path
        fill="#6410FF"
        fillOpacity={0.1}
        d="M61.146.42H4.999a5 5 0 0 0-5 5v19.556a5 5 0 0 0 5 5h56.147a5 5 0 0 0 5-5V5.42a5 5 0 0 0-5-5"
      />
      <path
        fill="url(#stat_svg__c)"
        fillOpacity={0.1}
        d="M61.146.42H4.999a5 5 0 0 0-5 5v19.556a5 5 0 0 0 5 5h56.147a5 5 0 0 0 5-5V5.42a5 5 0 0 0-5-5"
      />
      <path
        fill="url(#stat_svg__d)"
        fillOpacity={0.1}
        d="M61.146.42H4.999a5 5 0 0 0-5 5v19.556a5 5 0 0 0 5 5h56.147a5 5 0 0 0 5-5V5.42a5 5 0 0 0-5-5"
      />
      <path
        stroke="url(#stat_svg__e)"
        strokeOpacity={0.3}
        strokeWidth={0.938}
        d="M61.147.889H4.999a4.53 4.53 0 0 0-4.531 4.53v19.557a4.53 4.53 0 0 0 4.531 4.53h56.148a4.53 4.53 0 0 0 4.531-4.53V5.42A4.53 4.53 0 0 0 61.147.889Z"
      />
      <path
        stroke="url(#stat_svg__f)"
        strokeOpacity={0.1}
        strokeWidth={0.938}
        d="M61.147.889H4.999a4.53 4.53 0 0 0-4.531 4.53v19.557a4.53 4.53 0 0 0 4.531 4.53h56.148a4.53 4.53 0 0 0 4.531-4.53V5.42A4.53 4.53 0 0 0 61.147.889Z"
      />
      <path
        fill="#fff"
        d="M27.174 18.81q-1.228.001-1.97-.64-.744-.653-.913-1.723h1.227q.135.654.575 1.025a1.6 1.6 0 0 0 1.047.36q.653-.001 1.092-.416.45-.427.45-1.33 0-.889-.439-1.34-.439-.46-1.126-.46-.46 0-.822.202-.36.192-.518.507h-1.08l.394-4.402h4.402v.98h-3.84l.519-.26-.237 3.018-.326-.08c.16-.264.39-.478.664-.618q.45-.248 1.103-.248.755 0 1.34.326.585.327.912.935t.327 1.44q0 .856-.35 1.465a2.3 2.3 0 0 1-.968.934q-.619.327-1.463.327zm4.89-.111q.158-1.915.912-3.76.754-1.846 2.14-3.648l.033.28h-4.605v-.98h5.641v.869a19 19 0 0 0-1.441 2.43q-.585 1.184-.923 2.366c-.22.799-.363 1.617-.428 2.443zm7.713 0V16.56l.045-.225v-4.628l.428.124-3.378 4.57-.462-.438h5.562v.98H35.78v-.912l4.042-5.438h1.182V18.7z"
      />
    </g>
    <defs>
      <linearGradient
        id="stat_svg__b"
        x1={40.738}
        x2={40.415}
        y1={37.337}
        y2={31.674}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.38} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="stat_svg__c"
        x1={33.073}
        x2={33.073}
        y1={0.42}
        y2={29.976}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.3} />
      </linearGradient>
      <linearGradient
        id="stat_svg__e"
        x1={25.302}
        x2={69.622}
        y1={-86.376}
        y2={13.807}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="stat_svg__f"
        x1={4.858}
        x2={5.452}
        y1={0.42}
        y2={15.178}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.38} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="stat_svg__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 29.5556 -33.0737 0 33.073 .42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.4} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <clipPath id="stat_svg__a">
        <path fill="#fff" d="M0 0h67v38H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStat;
