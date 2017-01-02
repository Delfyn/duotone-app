import { TOGGLE_COLOR_PICKER } from '../../constants/actionTypes';
import { toggleColorPicker } from '../ui';

describe('actions', () => {
  it('should create an action to toggle the visibility of the color picker', () => {
    const expectedAction = {
      type: TOGGLE_COLOR_PICKER,
    };
    expect(toggleColorPicker()).toEqual(expectedAction);
  });
});
