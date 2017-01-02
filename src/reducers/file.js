/* @flow */

import { ADD_FILE } from '../constants/actionTypes';

type actionType = {
  type: string,
  file: Blob,
  fileSize: number,
  fileType: string,
  fileName: string,
};

export const initialState = {
  originalFile: undefined,
  fileName: undefined,
  fileSize: undefined,
  fileType: undefined,
};

const files = (state: Object = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_FILE:
      return {
        ...state,
        originalFile: action.file,
        fileSize: action.fileSize,
        fileType: action.fileType,
        fileName: action.fileName,
      };
    default:
      return state;
  }
};

export default files;
