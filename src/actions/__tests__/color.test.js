import {
  ADD_DUOTONE_COLOR,
  SET_DUOTONE_COLOR,
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
} from '../../constants/actionTypes';
import {
  setPrimaryColor,
  setSecondaryColor,
  setDuotoneColor,
  addDuotoneColor,
} from '../color';

describe('actions', () => {
  it('should create an action to set the primary color', () => {
    const primary = '#ff0000';
    const expectedAction = {
      type: SET_PRIMARY_COLOR,
      primary,
    };
    expect(setPrimaryColor(primary)).toEqual(expectedAction);
  });

  it('should create an action to set the primary color', () => {
    const secondary = '#00ff00';
    const expectedAction = {
      type: SET_SECONDARY_COLOR,
      secondary,
    };
    expect(setSecondaryColor(secondary)).toEqual(expectedAction);
  });

  it('should create an action to set a duotone color', () => {
    const primary = '#00ff00';
    const secondary = '#0000ff';
    const expectedAction = {
      type: SET_DUOTONE_COLOR,
      primary,
      secondary,
    };
    expect(setDuotoneColor(primary, secondary)).toEqual(expectedAction);
  });

  it('should create an action to add a duotone color', () => {
    const primary = '#ff0000';
    const secondary = '#00ff00';
    const expectedAction = {
      type: ADD_DUOTONE_COLOR,
      primary,
      secondary,
    };
    expect(addDuotoneColor(primary, secondary)).toEqual(expectedAction);
  });
});
