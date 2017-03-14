import {
  ADD_DUOTONE_COLOR,
  SET_DUOTONE_COLOR,
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
} from '../../constants/actionTypes';
import reducer, { initialState } from '../colors';

describe('colors reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_PRIMARY_COLOR', () => {
    expect(
      reducer(
        {},
        {
          type: SET_PRIMARY_COLOR,
          primary: '#ff0000',
        },
      ),
    ).toEqual({
      primary: '#ff0000',
      secondary: undefined,
    });

    expect(
      reducer(
        {
          primary: '#ff0000',
          secondary: '#00ff00',
        },
        {
          type: SET_PRIMARY_COLOR,
          primary: '#0000ff',
        },
      ),
    ).toEqual({
      primary: '#0000ff',
      secondary: '#00ff00',
    });
  });

  it('should handle SET_SECONDARY_COLOR', () => {
    expect(
      reducer(
        {},
        {
          type: SET_SECONDARY_COLOR,
          secondary: '#ff0000',
        },
      ),
    ).toEqual({
      primary: undefined,
      secondary: '#ff0000',
    });

    expect(
      reducer(
        {
          primary: '#ff0000',
          secondary: '#00ff00',
        },
        {
          type: SET_SECONDARY_COLOR,
          secondary: '#0000ff',
        },
      ),
    ).toEqual({
      primary: '#ff0000',
      secondary: '#0000ff',
    });
  });

  it('should handle SET_DUOTONE_COLOR', () => {
    expect(
      reducer(
        {},
        {
          type: SET_DUOTONE_COLOR,
          primary: '#ff0000',
          secondary: '#00ff00',
        },
      ),
    ).toEqual({
      primary: '#ff0000',
      secondary: '#00ff00',
    });

    expect(
      reducer(
        {
          primary: '#ff0000',
          secondary: '#00ff00',
        },
        {
          type: SET_DUOTONE_COLOR,
          primary: '#00ff00',
          secondary: '#0000ff',
        },
      ),
    ).toEqual({
      primary: '#00ff00',
      secondary: '#0000ff',
    });
  });

  it('should handle ADD_DUOTONE_COLOR', () => {
    expect(
      reducer(
        {
          duotones: [],
        },
        {
          type: ADD_DUOTONE_COLOR,
          primary: '#ff0000',
          secondary: '#00ff00',
        },
      ),
    ).toEqual({
      primary: undefined,
      secondary: undefined,
      duotones: [
        {
          primary: '#ff0000',
          secondary: '#00ff00',
        },
      ],
    });

    expect(
      reducer(
        {
          duotones: [
            {
              primary: '#ffff00',
              secondary: '#ffffff',
            },
          ],
        },
        {
          type: ADD_DUOTONE_COLOR,
          primary: '#ff0000',
          secondary: '#00ff00',
        },
      ),
    ).toEqual({
      primary: undefined,
      secondary: undefined,
      duotones: [
        {
          primary: '#ffff00',
          secondary: '#ffffff',
        },
        {
          primary: '#ff0000',
          secondary: '#00ff00',
        },
      ],
    });
  });
});
