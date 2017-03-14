/* @flow */

import React, { Component } from 'react';
import { createDuotoneImage } from 'react-duotone';
import Wallpaper from '../components/Wallpaper';

class WallpaperPreview extends Component {
  constructor() {
    super();
    this.state = {};
  }
  state = {
    preview: String,
  };
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.originalFile) {
      this.setPreviewImage(nextProps);
    }
  }
  setPreviewImage(props: any) {
    const image = new Image();
    image.width = 15;
    image.height = 10;
    image.src = props.originalFile || this.props.originalFile;
    image.onload = () => {
      const primary = props.primary || this.props.primary;
      const secondary = props.secondary || this.props.secondary;
      this.setState({
        preview: createDuotoneImage(image, primary, secondary),
      });
    };
  }
  render() {
    const props = {
      ...this.props,
      ...this.state,
    };

    return <Wallpaper {...props} />;
  }
}

export default WallpaperPreview;
