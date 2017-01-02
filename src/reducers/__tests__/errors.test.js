import MockDate from 'mockdate';
import { INVALID_FILE } from '../../constants/actionTypes';
import reducer, { initialState } from '../errors';
import errorMessages from '../../lib/errors';

describe('errors reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INVALID_FILE', () => {
    const mockedDate = '2016-01-01';
    MockDate.set(mockedDate);

    expect(
      reducer({}, {
        type: INVALID_FILE,
      }),
    ).toEqual({
      type: 'invalid-file',
      message: errorMessages.invalidFile,
      showMs: 8000,
      createdAt: new Date(mockedDate),
    });

    expect(
      reducer({
        type: 'random-error',
        randomField: true,
      }, {
        type: INVALID_FILE,
      }),
    ).toEqual({
      type: 'invalid-file',
      message: errorMessages.invalidFile,
      showMs: 8000,
      createdAt: new Date(mockedDate),
    });

    MockDate.reset();
  });
});
