import React from 'react';
import renderer from 'react-test-renderer';
import FlipArrow from '../index';

test('FlipArrow renders correctly', () => {
  const component = renderer.create(<FlipArrow />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
