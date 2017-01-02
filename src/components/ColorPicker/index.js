/* @flow */

import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import classNames from 'classnames';
import './style.css';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
      color: '#fcf0ff',
    };

    this.handleClick = () => {
      this.setState({
        displayColorPicker: !this.state.displayColorPicker,
      });
    };
    this.handleClose = () => {
      this.setState({
        displayColorPicker: false,
      });
    };
  }
  state = {
    displayColorPicker: Boolean,
    color: String,
  };
  handleClick: () => void
  handleClose: () => void
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '5',
    };
    const cover = {
      position: 'fixed',
      top: '-1000px',
      right: '-1000px',
      bottom: '-1000px',
      left: '-1000px',
    };
    return (
      <div>
        <div
          className={classNames('color-field flex-auto', this.props.className)}
          onClick={this.handleClick}
          style={{ backgroundColor: this.props.color }}
        >
          {this.props.color}
        </div>
        { this.state.displayColorPicker ? <div style={popover}>
          <div style={cover} onClick={this.handleClose} />
          <ChromePicker
            color={this.props.color}
            onChangeComplete={color => this.props.onChange(color.hex)}
            disableAlpha
          />
        </div> : null }
      </div>
    );
  }
}

export default ColorPicker;
