import store from '../store';

test('store should return the initial state', () => {
  const initialState = store.getState();
  expect(initialState).toMatchSnapshot();
});
