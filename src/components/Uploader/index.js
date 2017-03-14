/* @flow */

import React, { Component } from 'react';
import { createDuotoneImage } from 'react-duotone';
import UploaderInput from '../UploaderInput';
import UploaderColors from '../UploaderColors';
import Button from '../Button';
import './style.css';

type Props = {
  originalFile: any,
  primary: string,
  secondary: string,
};

class Uploader extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      downloadDisabled: true,
    };
    this.onDownloadClick = this.onDownloadClick.bind(this);
  }
  state = {
    downloadDisabled: Boolean,
  };
  onDownloadClick: () => void;
  onDownloadClick() {
    const { originalFile, primary, secondary } = this.props;
    const img = new Image();
    img.src = originalFile;
    img.onload = () => {
      const duotoneImage = createDuotoneImage(img, primary, secondary);
      const downloadLink = document.createElement('a');
      downloadLink.href = duotoneImage;
      downloadLink.download = 'duotone-export.png';
      downloadLink.target = '_blank';
      downloadLink.style.display = 'none';
      if (document.body) {
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
      if (document.body && document.body.removeChild) {
        document.body.removeChild(downloadLink);
      }
    };
  }
  render() {
    return (
      <div>
        <UploaderInput {...this.props} />
        <UploaderColors {...this.props} />
        <footer className="flex px2 pb2">
          <Button
            className="flex-auto"
            disabled={this.props.downloadDisabled}
            onClick={this.onDownloadClick}>
            Download
          </Button>
        </footer>
      </div>
    );
  }
}

export default Uploader;
