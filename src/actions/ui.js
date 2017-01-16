/* @flow */

import {
  SET_ACTIVE,
  SET_INACTIVE,
  TOGGLE_COLOR_PICKER,
} from '../constants/actionTypes';
import makeActionCreator from '../lib/make-action-creator';

export const setActive = makeActionCreator(SET_ACTIVE);
export const setInactive = makeActionCreator(SET_INACTIVE);
export const toggleColorPicker = makeActionCreator(TOGGLE_COLOR_PICKER);
