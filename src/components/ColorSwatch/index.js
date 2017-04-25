/* @flow */

import React from 'react';

type PropType = {
  className?: string,
  primary?: string,
  secondary?: string,
  onClick: Function,
  size?: number,
  rotation?: number,
};

const ColorSwatch = ({
  onClick,
  className = '',
  primary = '#9B9B9B',
  secondary = '#4A4A4A',
  size = 40,
  rotation = 45,
}: PropType) => (
  <svg
    className={className}
    onClick={() => onClick(primary, secondary)}
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <circle id="a" cx={size / 2} cy={size / 2} r={size / 2} />
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill={primary} xlinkHref="#a" />
      <path
        fill={secondary}
        mask="url(#b)"
        d={`M${size / 2} 0h${size / 2}v${size}H${size / 2}z`}
      />
    </g>
  </svg>
);

export default ColorSwatch;
