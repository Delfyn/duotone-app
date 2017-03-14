/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import UploaderInput from './index';

storiesOf('UploaderInput', module)
  .add('with file', () => (
    <UploaderInput
      openFilepicker={action('openFilepicker')}
      fileName="my-image.png"
      fileSize={12345}
    />
  ))
  .add('without file', () => (
    <UploaderInput openFilepicker={action('openFilepicker')} />
  ));
