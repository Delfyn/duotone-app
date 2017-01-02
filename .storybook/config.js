import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import '../src/stylesheets/index.css';
import './style.css';

addDecorator((story) => (
  <div style={{ padding: '2rem', minHeight: '100vh' }}>
    {story()}
  </div>
));


function loadStories() {
  require('./stories');
}

configure(loadStories, module);
