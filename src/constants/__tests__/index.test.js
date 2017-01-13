import * as actionTypes from '../index';

test('actionTypes are exported correctly', () => {
  expect(actionTypes).toMatchSnapshot();
});
