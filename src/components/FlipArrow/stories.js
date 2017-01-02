/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FlipArrow from './index';

storiesOf('FlipArrow', module)
  .add('Simple example', () => (
    <FlipArrow onClick={action('onClick')} />
  ));
