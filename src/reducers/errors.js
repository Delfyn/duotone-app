/* @flow */

import { INVALID_FILE } from '../constants/actionTypes';
import errorMessages from '../lib/errors';

type actionType = {
  type: string,
};

export const initialState = {};

const errors = (state: Object = initialState, action: actionType) => {
  switch (action.type) {
    case INVALID_FILE:
      return {
        type: 'invalid-file',
        message: errorMessages.invalidFile,
        showMs: 8000,
        createdAt: new Date(),
      };
    default:
      return state;
  }
};

export default errors;
