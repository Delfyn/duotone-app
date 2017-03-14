/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ColorPicker from './index';

storiesOf('ColorPicker', module).add('Simple example', () => (
  <ColorPicker color="#fd3659" onChange={action('onChange')} />
));
