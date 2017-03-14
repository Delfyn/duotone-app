import React from 'react';
import renderer from 'react-test-renderer';
import Dropzone from '../Dropzone';

test('Dropzone renders correctly', () => {
  const component = renderer.create(<Dropzone />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
