/* @flow */

import {
  ADD_DUOTONE_COLOR,
  SET_DUOTONE_COLOR,
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
} from '../constants/actionTypes';
import makeActionCreator from '../lib/make-action-creator';

export const addDuotoneColor = makeActionCreator(
  ADD_DUOTONE_COLOR,
  'primary',
  'secondary',
);

export const setDuotoneColor = makeActionCreator(
  SET_DUOTONE_COLOR,
  'primary',
  'secondary',
);

export const setPrimaryColor = makeActionCreator(SET_PRIMARY_COLOR, 'primary');

export const setSecondaryColor = makeActionCreator(
  SET_SECONDARY_COLOR,
  'secondary',
);
