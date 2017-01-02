/* @flow */

import React from 'react';
import { DuotoneImage } from 'react-duotone';
import './style.css';

type Props = {
  preview: any,
  primary: string,
  secondary: string,
  fileName: string,
  originalFile: any,
};

const Wallpaper = ({
  preview = '',
  primary,
  secondary,
  fileName,
  originalFile,
}: Props) => (
  <div className="image-background-wrapper flex items-center">
    <div
      className="image-background z1"
      style={{ backgroundImage: `url(${preview})` }}
    />
    {
      <DuotoneImage
        className="image-preview mx-auto z2"
        alt={fileName}
        primaryColor={primary}
        secondaryColor={secondary}
        src={originalFile}
      />
    }
  </div>
);

export default Wallpaper;
