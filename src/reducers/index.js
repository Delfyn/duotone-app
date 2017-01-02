/* @flow */

import { combineReducers } from 'redux';
import colors from './colors';
import errors from './errors';
import files from './file';
import ui from './ui';

const app = combineReducers({
  colors,
  errors,
  files,
  ui,
});

export default app;
