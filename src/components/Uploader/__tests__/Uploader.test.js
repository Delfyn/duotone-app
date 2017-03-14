import React from 'react';
import renderer from 'react-test-renderer';
import Uploader from '../index';

test('Uploader renders correctly', () => {
  const component = renderer.create(<Uploader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
