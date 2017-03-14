/* @flow */

import { ADD_FILE } from '../constants/actionTypes';
import makeActionCreator from '../lib/make-action-creator';

// eslint-disable-next-line  import/prefer-default-export
export const addFile = makeActionCreator(
  ADD_FILE,
  'file',
  'fileSize',
  'fileType',
  'fileName',
);
