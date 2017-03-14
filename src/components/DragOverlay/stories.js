/* @flow */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DragOverlay from './index';

const BackgroundDecorator = story => (
  <div
    style={{
      background: '#243261',
      width: '100%',
      height: '100vh',
    }}>
    {story()}
  </div>
);

storiesOf('DragOverlay', module)
  .addDecorator(BackgroundDecorator)
  .add('without props', () => <DragOverlay />);
