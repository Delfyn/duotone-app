import React from 'react';
import renderer from 'react-test-renderer';
import Uploader from '../Uploader';

test('Uploader renders correctly', () => {
  const state = {
    files: {
      originalFile: new Blob(),
      fileName: 'my-image.png',
      fileSize: 12345,
    },
    colors: {
      duotones: [],
      primary: '#ff00ff',
      secondary: '#00ff00',
    },
    ui: {
      showColorPicker: false,
    },
  };

  const subscribe = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn(() => state);

  const store = { subscribe, dispatch, getState };
  const props = {};

  const component = renderer.create(
    <Uploader store={store} {...props} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(subscribe).toBeCalled();
  expect(getState).toBeCalled();
});
