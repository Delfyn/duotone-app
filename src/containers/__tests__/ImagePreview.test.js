import React from 'react';
import renderer from 'react-test-renderer';
import ImagePreview from '../ImagePreview';

test('ImagePreview renders correctly', () => {
  const state = {
    files: {
      originalFile: new Blob(),
      fileName: 'my-image.png',
    },
    colors: {
      primary: '#ff00ff',
      secondary: '#00ff00',
    },
  };

  const subscribe = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn(() => state);

  const store = { subscribe, dispatch, getState };
  const props = {};

  const component = renderer.create(
    <ImagePreview store={store} {...props} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(subscribe).toBeCalled();
  expect(getState).toBeCalled();
});
