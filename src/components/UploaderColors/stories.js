/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UploaderColors from './index';

const UploaderColorsWithProps = ({ showColorPicker = false }) => (
  <UploaderColors
    primary="#D42D48"
    secondary="#243261"
    duotones={[
      {
        primary: '#D42D48',
        secondary: '#243261',
      }, {
        primary: '#D3F178',
        secondary: '#263661',
      }, {
        primary: '#FEFFFF',
        secondary: '#D5E5E8',
      },
    ]}
    showColorPicker={showColorPicker}
    onDuotoneClick={action('onDuotoneClick')}
    onToggleColorPicker={action('onToggleColorPicker')}
    onAddDuotoneClick={action('onAddDuotoneClick')}
    onSetPrimaryClick={action('onSetPrimaryClick')}
    onSetSecondaryClick={action('onSetSecondaryClick')}
  />
);

storiesOf('UploaderColors', module)
  .add('with closed color picker', () => (
    <UploaderColorsWithProps />
  ))
  .add('with open color picker', () => (
    <UploaderColorsWithProps showColorPicker />
  ));
