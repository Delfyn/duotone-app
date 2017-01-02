/* @flow */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ActivityBar from './index';

storiesOf('ActivityBar', module)
  .add('active', () => (
    <ActivityBar active />
  ))
  .add('inactive', () => (
    <ActivityBar />
  ));
