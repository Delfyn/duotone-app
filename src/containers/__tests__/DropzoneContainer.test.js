import React from 'react';
import renderer from 'react-test-renderer';
import DropzoneContainer from '../DropzoneContainer';

test('DropzoneContainer renders correctly', () => {
  const state = {};

  const subscribe = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn(() => state);

  const store = { subscribe, dispatch, getState };
  const props = {};

  const component = renderer.create(
    <DropzoneContainer store={store} {...props} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(subscribe).toBeCalled();
  expect(getState).toBeCalled();
});
