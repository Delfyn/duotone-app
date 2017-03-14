/* @flow */

import React from 'react';
import cx from 'classnames';
import './style.css';

type ButtonProps = {
  className?: string,
  children?: Element<any>,
  onClick: Function,
  disabled?: boolean,
};

const Button = (
  { className, children, onClick, disabled = false }: ButtonProps,
) => (
  <button
    className={cx(className, 'btn')}
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
);

export default Button;
