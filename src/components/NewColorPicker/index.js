/* @flow */

import React from 'react';
import classNames from 'classnames';
import ColorPicker from '../ColorPicker';
import FlipArrow from '../FlipArrow';
import Checkmark from '../Checkmark';
import './style.css';

type Props = {
  className?: string,
  primary: string,
  secondary: string,
  onAddDuotoneClick: Function,
  onSetDuotoneClick: Function,
  onSetPrimaryClick: Function,
  onSetSecondaryClick: Function,
};

const NewColorPicker = ({
  className,
  primary,
  secondary,
  onAddDuotoneClick,
  onSetDuotoneClick,
  onSetPrimaryClick,
  onSetSecondaryClick,
}: Props) => (
  <div className={classNames('new-color-picker flex pt2', className)}>
    <ColorPicker className="mr1" color={primary} onChange={onSetPrimaryClick} />
    <ColorPicker className="mr1" color={secondary} onChange={onSetSecondaryClick} />
    <div
      className="cursor-pointer mr1"
      onClick={() => onSetDuotoneClick(secondary, primary)}
    >
      <FlipArrow />
    </div>
    <div
      className="cursor-pointer"
      onClick={() => onAddDuotoneClick(primary, secondary)}
    >
      <Checkmark />
    </div>
  </div>
);

export default NewColorPicker;
