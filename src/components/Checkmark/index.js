/* @flow */

import React from 'react';

type Props = {
  className?: string,
  color?: string,
  size?: number,
  onClick?: Function,
};

const Checkmark = ({
  className = '',
  color = '#333',
  size = 40,
  onClick,
}: Props) => (
  <svg
    className={className}
    onClick={onClick}
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <circle id="a" cx={size / 2} cy={size / 2} r={size / 2} />
      <mask id="b" x="0" y="0" width={size} height={size} fill="#fff">
        <use xlinkHref="#a" />
      </mask>
    </defs>
    <g fill={color} fillRule="evenodd">
      <use stroke={color} mask="url(#b)" strokeWidth="4" xlinkHref="#a" />
      <path fill="#fff" d="M17.854 26.96l12.57-12.57-1.414-1.415-11.156 11.157-6.157-6.157-1.415 1.414z" />
    </g>
  </svg>
);

export default Checkmark;
