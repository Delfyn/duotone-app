/* @flow */

import { TOGGLE_COLOR_PICKER } from '../constants/actionTypes';
import makeActionCreator from '../lib/make-action-creator';

// eslint-disable-next-line  import/prefer-default-export
export const toggleColorPicker = makeActionCreator(
  TOGGLE_COLOR_PICKER,
);
