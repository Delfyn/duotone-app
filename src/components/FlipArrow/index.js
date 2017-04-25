/* @flow */

import React from 'react';
import './style.css';

type Props = {
  className?: string,
  size?: number,
  onClick?: Function,
};

const FlipArrow = ({ className = '', size = 40, onClick }: Props) => (
  <svg
    className={className}
    onClick={onClick}
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <circle id="a" cx={size / 2} cy={size / 2} r={size / 2} />
      <mask id="b" x="0" y="0" width={size} height={size} fill="#fff">
        <use xlinkHref="#a" />
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use stroke="#979797" mask="url(#b)" strokeWidth="4" xlinkHref="#a" />
      <g fill="#9B9B9B">
        <path d="M8 20l5-7v14zM13 21v-2h14v2zM32 20l-5 7V13z" />
      </g>
    </g>
  </svg>
);

export default FlipArrow;
