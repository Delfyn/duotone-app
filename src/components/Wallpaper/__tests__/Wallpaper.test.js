import React from 'react';
import renderer from 'react-test-renderer';
import Wallpaper from '../index';

test('Wallpaper renders correctly', () => {
  const component = renderer.create(
    <Wallpaper fileName="my-image.png" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
