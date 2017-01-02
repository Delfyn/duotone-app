import { INVALID_FILE } from '../../constants/actionTypes';
import { setInvalidFile } from '../errors';

describe('actions', () => {
  it('should create an action to create an invalid file error', () => {
    const value = 'Invalid File xyz.pdf';
    const expectedAction = {
      type: INVALID_FILE,
      value,
    };
    expect(setInvalidFile(value)).toEqual(expectedAction);
  });
});
