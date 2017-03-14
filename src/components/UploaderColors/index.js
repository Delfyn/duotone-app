/* @flow */

import React from 'react';
import ColorSwatch from '../ColorSwatch';
import NewColorSwatch from '../NewColorSwatch';
import NewColorPicker from '../NewColorPicker';
import './style.css';

type Props = {
  primary: string,
  secondary: string,
  duotones: any,
  showColorPicker: boolean,
  onDuotoneClick: Function,
  onToggleColorPicker: Function,
  onAddDuotoneClick: Function,
  onSetPrimaryClick: Function,
  onSetSecondaryClick: Function,
};

const UploaderColors = (
  {
    primary,
    secondary,
    duotones = [],
    showColorPicker,
    onDuotoneClick,
    onToggleColorPicker,
    onAddDuotoneClick,
    onSetPrimaryClick,
    onSetSecondaryClick,
  }: Props,
) => (
  <main className="my2 px2 py2">
    <p>
      Select a color combination or add your own to change the look of your photo.
    </p>
    <div>
      {duotones.map((duotone, index) => (
        <ColorSwatch
          className="cursor-pointer mr1 mb1"
          onClick={onDuotoneClick}
          key={index}
          {...duotone}
        />
      ))}
      <NewColorSwatch
        className="cursor-pointer mr1 mb1"
        rotation={showColorPicker ? 45 : 0}
        onClick={onToggleColorPicker}
      />
      {showColorPicker
        ? <NewColorPicker
            className="mt1"
            primary={primary}
            secondary={secondary}
            onAddDuotoneClick={onAddDuotoneClick}
            onSetDuotoneClick={onDuotoneClick}
            onSetPrimaryClick={onSetPrimaryClick}
            onSetSecondaryClick={onSetSecondaryClick}
          />
        : null}
    </div>
  </main>
);

export default UploaderColors;
