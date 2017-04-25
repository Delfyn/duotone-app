/* @flow */

import React from 'react';
import './style.css';

type Props = {
  className?: string,
  size?: number,
  rotation?: number,
  onClick: Function,
};

const NewColorSwatch = ({
  className = '',
  size = 40,
  rotation = 0,
  onClick,
}: Props) => (
  <svg
    className={className}
    onClick={onClick}
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <circle id="path-1" cx={size / 2} cy={size / 2} r={size / 2} />
      <mask
        id="mask-2"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width={size}
        height={size}
        fill="white">
        <use xlinkHref="#path-1" />
      </mask>
      <polygon
        id="path-3"
        points="21 19 21 11 19 11 19 19 11 19 11 21 19 21 19 29 21 29 21 21 29 21 29 19"
      />
      <mask
        id="mask-4"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width={size / 2}
        height={size / 2}
        fill="white">
        <use xlinkHref="#path-3" />
      </mask>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
      <g id="Artboard-2" stroke="#979797">
        <g id="Plus">
          <g id="Oval-3">
            <use mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1" />
            <use
              id="Combined-Shape"
              mask="url(#mask-4)"
              strokeWidth="2"
              fill="#D8D8D8"
              fillRule="evenodd"
              xlinkHref="#path-3"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default NewColorSwatch;
