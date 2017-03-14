/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NewColorSwatch from './index';

storiesOf('NewColorSwatch', module).add('Simple example', () => (
  <NewColorSwatch onClick={action('onClick')} />
));
