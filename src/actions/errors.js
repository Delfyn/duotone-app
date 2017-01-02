/* @flow */

import { INVALID_FILE } from '../constants/actionTypes';
import makeActionCreator from '../lib/make-action-creator';

// eslint-disable-next-line  import/prefer-default-export
export const setInvalidFile = makeActionCreator(INVALID_FILE, 'value');
