import { ADD_FILE } from '../../constants/actionTypes';
import reducer, { initialState } from '../file';

describe('errors reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FILE', () => {
    expect(
      reducer({}, {
        type: ADD_FILE,
        file: new Blob(),
        fileSize: 0,
        fileType: 'image/png',
        fileName: 'image.png',
      }),
    ).toEqual({
      originalFile: new Blob(),
      fileSize: 0,
      fileType: 'image/png',
      fileName: 'image.png',
    });
  });
});
