/* @flow */

import React, { Children, cloneElement } from 'react';
import Draggable from 'react-draggable';
import './style.css';

const Panel = (props: any) => {
  const childProps = Object.assign({}, props);
  delete childProps.children;
  const childrenWithProps = Children.map(props.children, child =>
    cloneElement(child, {
      ...childProps,
    }),
  );

  return (
    <Draggable handle=".panel-draggable" allowAnyClick={false}>
      <div className="panel mt4 ml3">
        <div className="panel-draggable" />
        {childrenWithProps}
      </div>
    </Draggable>
  );
};

export default Panel;
