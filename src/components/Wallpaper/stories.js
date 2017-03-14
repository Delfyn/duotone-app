/* @flow */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wallpaper from './index';

storiesOf('Wallpaper', module).add('Simple example', () => (
  <Wallpaper
    preview="https://facebook.github.io/react/img/logo_og.png"
    primary="#D42D48"
    secondary="#243261"
    fileName="my-image.png"
    originalFile="https://facebook.github.io/react/img/logo_og.png"
  />
));
