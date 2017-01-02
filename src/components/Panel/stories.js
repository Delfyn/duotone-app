/* @flow */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Panel from './index';

storiesOf('Panel', module)
  .add('Simple example', () => (
    <Panel>
      <h1>Panel Headline</h1>
      <p>You can drag me around if you grab me at the top.</p>
    </Panel>
  ));
