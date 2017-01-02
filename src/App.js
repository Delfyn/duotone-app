/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/store';
import ActivityBarContainer from './components/ActivityBar';
import DropzoneContainer from './containers/DropzoneContainer';
import Panel from './components/Panel';
import Uploader from './containers/Uploader';
import ImagePreview from './containers/ImagePreview';
import Header from './components/Header';
import './stylesheets/index.css';

const App = () => (
  <Provider store={store}>
    <div>
      <ActivityBarContainer />
      <ImagePreview />
      <Header />
      <DropzoneContainer>
        <Panel>
          <Uploader />
        </Panel>
      </DropzoneContainer>
    </div>
  </Provider>
);

export default App;
