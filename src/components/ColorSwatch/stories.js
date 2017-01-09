/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ColorSwatch from './index';
import duotones from '../../lib/color-claim';

storiesOf('ColorSwatch', module)
  .add('without props', () => (
    <ColorSwatch onClick={action('clicked')} />
  ))
  .add('with different colors', () => (
    <div>
      <ColorSwatch
        primary="#D42D48"
        secondary="#243261"
        onClick={action('clicked')}
      />
      <ColorSwatch
        primary="#D3F178"
        secondary="#263661"
        onClick={action('clicked')}
      />
      <ColorSwatch
        primary="#FEFFFF"
        secondary="#D5E5E8"
        onClick={action('clicked')}
      />
    </div>
  ))
  .add('with color-claim', () => (
    <div>
      {duotones.map((colors, index) => (
        <ColorSwatch
          {...colors}
          className="mr1 mb1"
          onClick={action('clicked')}
          key={index}
        />
      ))}
    </div>
  ))
  .add('with 0 degree rotation', () => (
    <ColorSwatch
      primary="#D42D48"
      secondary="#243261"
      rotation={0}
      onClick={action('clicked')}
    />
  ))
  .add('with bigger size', () => (
    <ColorSwatch
      primary="#D42D48"
      secondary="#243261"
      size={200}
      onClick={action('clicked')}
    />
  ));
