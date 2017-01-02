/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .add('without props', () => (
    <Button onClick={action('onClick')}>Click me</Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('onClick')}>Click me</Button>
  ))
  .add('with onClick action', () => (
    <Button onClick={action('clicked')}>Click me</Button>
  ));
