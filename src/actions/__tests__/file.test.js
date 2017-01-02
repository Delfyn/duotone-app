import { ADD_FILE } from '../../constants/actionTypes';
import { addFile } from '../file';

describe('actions', () => {
  it('should create an action to add a new file', () => {
    const file = new Blob();
    const fileSize = 0;
    const fileType = 'image/png';
    const fileName = 'image.png';
    const expectedAction = {
      type: ADD_FILE,
      file,
      fileSize,
      fileType,
      fileName,
    };
    expect(addFile(file, fileSize, fileType, fileName)).toEqual(expectedAction);
  });
});
