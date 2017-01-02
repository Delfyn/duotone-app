/* @flow */

import React from 'react';
import './style.css';

const DragOverlay = () => (
  <div className="overlay overlay-drop-it flex items-center z4">
    <div className="center mx-auto px2 py2">
      <h2 className="h1 mb2">Drop it like it‘s hot</h2>
      <p>Add your files by dropping them anywhere in this window</p>
    </div>
  </div>
);

export default DragOverlay;
