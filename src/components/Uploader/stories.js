/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Uploader from './index';
import Panel from '../Panel';

const UploaderWithProps = ({ showColorPicker = false }) => (
  <Uploader
    originalFile={new Blob()}
    fileName="my-image.png"
    fileSize={12345}
    downloadDisabled
    duotones={[
      {
        primary: '#D42D48',
        secondary: '#243261',
      }, {
        primary: '#D3F178',
        secondary: '#263661',
      }, {
        primary: '#FEFFFF',
        secondary: '#D5E5E8',
      },
    ]}
    primary="#D42D48"
    secondary="#243261"
    showColorPicker={showColorPicker}
    onDuotoneClick={action('onDuotoneClick')}
    onAddDuotoneClick={action('onAddDuotoneClick')}
    onSetPrimaryClick={action('onSetPrimaryClick')}
    onSetSecondaryClick={action('onSetSecondaryClick')}
    onToggleColorPicker={action('onToggleColorPicker')}
  />
);

storiesOf('Uploader', module)
  .add('simple example with Panel', () => (
    <Panel>
      <UploaderWithProps />
    </Panel>
  ))
  .add('simple example with Panel with new ColorPicker', () => (
    <Panel>
      <UploaderWithProps showColorPicker />
    </Panel>
  ))
  .add('simple example without Panel', () => (
    <UploaderWithProps />
  ));
