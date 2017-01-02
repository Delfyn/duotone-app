/* @flow */

import React from 'react';
import classNames from 'classnames';
import { formatFileDescription } from './util';
import './style.css';

type Props = {
  openFilepicker: Function,
  fileName?: string,
  fileSize?: number,
};

const UploaderInput = ({ openFilepicker, fileName, fileSize }: Props) => (
  <header
    className={classNames('panel-file-picker', { 'has-file': !!fileName }, 'flex items-center px2 py1')}
    onClick={openFilepicker}
  >
    <svg viewBox="24 0 72 72">
      <path
        d="M60.493 72C79.883 72 96 55.882 96 36.493 96 16.118 79.882 0 60.493 0 40.118 0 24 16.118 24 36.493 24 55.883 40.118 72 60.493 72z"
        fill="#333"
        fillRule="evenodd"
      />
      <path
        d="M58 34h-9c-.553 0-1 .452-1 1.01v1.98c0 .567.448 1.01 1 1.01h9v9c0 .553.452 1 1.01 1h1.98c.567 0 1.01-.448 1.01-1v-9h9c.553 0 1-.452 1-1.01v-1.98c0-.567-.448-1.01-1-1.01h-9v-9c0-.553-.452-1-1.01-1h-1.98c-.567 0-1.01.448-1.01 1v9z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
    <div className="mx2">
      <h2 className={`${fileName ? 'h4' : 'h3'} regular m0`}>
        {fileName ? 'Change image' : 'Choose image'}
      </h2>
      {fileName && fileSize ? formatFileDescription(fileName, fileSize) : null}
    </div>
  </header>
);

export default UploaderInput;
