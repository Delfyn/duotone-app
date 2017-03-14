/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkmark from './index';

storiesOf('Checkmark', module)
  .add('without props', () => <Checkmark onClick={action('onClick')} />)
  .add('with different colors', () => (
    <div>
      <Checkmark color="#FD3659" onClick={action('onClick')} />
      <Checkmark color="#243261" onClick={action('onClick')} />
    </div>
  ));
