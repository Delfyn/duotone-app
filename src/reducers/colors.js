/* @flow */

import {
  ADD_DUOTONE_COLOR,
  SET_DUOTONE_COLOR,
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
} from '../constants/actionTypes';
import duotones from '../lib/duotones';

type actionType = {
  type: string,
  primary?: string,
  secondary?: string,
};

export const initialState = {
  primary: duotones[0].primary,
  secondary: duotones[0].secondary,
  duotones,
};

const colors = (state: Object = initialState, action: actionType) => {
  switch (action.type) {
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        primary: action.primary,
      };
    case SET_SECONDARY_COLOR:
      return {
        ...state,
        secondary: action.secondary,
      };
    case SET_DUOTONE_COLOR:
      return {
        ...state,
        primary: action.primary,
        secondary: action.secondary,
      };
    case ADD_DUOTONE_COLOR:
      return {
        ...state,
        duotones: state.duotones.concat([
          {
            primary: action.primary,
            secondary: action.secondary,
          },
        ]),
      };
    default:
      return state;
  }
};

export default colors;
