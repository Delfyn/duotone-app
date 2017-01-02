/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NewColorPicker from './index';

storiesOf('NewColorPicker', module)
  .add('Simple example', () => (
    <NewColorPicker
      primary="#fd3659"
      secondary="#243261"
      onAddDuotoneClick={action('onAddDuotoneClick')}
      onSetDuotoneClick={action('onSetDuotoneClick')}
      onSetPrimaryClick={action('onSetPrimaryClick')}
      onSetSecondaryClick={action('onSetSecondaryClick')}
    />
  ));
