/* @flow */

import {
  ADD_DUOTONE_COLOR,
  TOGGLE_COLOR_PICKER,
} from '../constants/actionTypes';

type actionType = {
  type: string,
};

export const initialState = {
  showColorPicker: false,
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
    default:
      return state;
  }
};

export default files;
