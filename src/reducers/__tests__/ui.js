import { TOGGLE_COLOR_PICKER } from '../../constants/actionTypes';
import reducer, { initialState } from '../ui';

describe('errors reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_COLOR_PICKER', () => {
    expect(
      reducer({}, {
        type: TOGGLE_COLOR_PICKER,
      }),
    ).toEqual({
      showColorPicker: true,
    });

    expect(
      reducer({
        showColorPicker: false,
      }, {
        type: TOGGLE_COLOR_PICKER,
      }),
    ).toEqual({
      showColorPicker: true,
    });

    expect(
      reducer({
        showColorPicker: true,
      }, {
        type: TOGGLE_COLOR_PICKER,
      }),
    ).toEqual({
      showColorPicker: false,
    });
  });
});
