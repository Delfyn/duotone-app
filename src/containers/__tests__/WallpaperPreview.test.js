import React from 'react';
import renderer from 'react-test-renderer';
import WallpaperPreview from '../WallpaperPreview';

test('WallpaperPreview renders correctly', () => {
  const component = renderer.create(
    <WallpaperPreview fileName="my-image.png" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
