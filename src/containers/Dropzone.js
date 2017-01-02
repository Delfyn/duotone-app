/* @flow */

import React, { Children, Component } from 'react';
import ReactDropzone from 'react-dropzone';
import DragOverlay from '../components/DragOverlay';
import './dropzone.css';

class Dropzone extends Component {
  constructor() {
    super();
    this.state = {
      showDragMessage: false,
    };

    this.onDragEnter = () => {
      this.setState({ showDragMessage: true });
    };
    this.onDragLeave = () => {
      this.setState({ showDragMessage: false });
    };
    this.onDrop = (acceptedFiles: any, rejectedFiles: any) => {
      this.setState({ showDragMessage: false });

      if (rejectedFiles.length) {
        this.props.invalidFile();
      } else if (acceptedFiles.length) {
        const newFile = acceptedFiles[0];
        const { preview, size, type, name } = newFile;
        this.props.addFile(preview, size, type, name);
      }
    };
    this.openFilepicker = () => {
      this.dropzone.open();
    };
  }
  state = {
    showDragMessage: Boolean,
  }
  onDragEnter: () => void
  onDragLeave: () => void
  onDrop: (acceptedFiles: any, rejectedFiles: any) => void
  openFilepicker: () => void
  dropzone: any
  render() {
    const props = Object.assign({}, this.props);
    delete props.children;
    const childrenWithProps = Children.map(this.props.children,
      child => React.cloneElement(child, {
        ...props,
        openFilepicker: this.openFilepicker,
      }),
    );

    return (
      <ReactDropzone
        activeStyle={{ backgroundColor: '#ccc' }}
        rejectStyle={{ backgroundColor: '#ff0000' }}
        onDrop={this.onDrop}
        multiple={false}
        disableClick
        accept="image/*"
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        ref={(node) => { this.dropzone = node; }}
      >
        <div className="drop-area z3">
          {this.state.showDragMessage ? <DragOverlay /> : null}
          {childrenWithProps}
        </div>
      </ReactDropzone>
    );
  }
}

export default Dropzone;
