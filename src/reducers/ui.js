/* @flow */

import {
  ADD_DUOTONE_COLOR,
  TOGGLE_COLOR_PICKER,
  SET_ACTIVE,
  SET_INACTIVE,
} from '../constants/actionTypes';

type actionType = {
  type: string,
};

export const initialState = {
  showColorPicker: false,
  active: false,
};

const files = (state: Object = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_DUOTONE_COLOR:
      return {
        ...state,
        showColorPicker: false,
      };
    case TOGGLE_COLOR_PICKER:
      return {
        ...state,
        showColorPicker: state.showColorPicker ? !state.showColorPicker : true,
      };
    case SET_ACTIVE:
      return {
        ...state,
        active: true,
      };
    case SET_INACTIVE:
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default files;
