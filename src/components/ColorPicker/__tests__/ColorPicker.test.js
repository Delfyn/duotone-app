import React from 'react';
import renderer from 'react-test-renderer';
import ColorPicker from '../index';

test('ColorPicker renders correctly', () => {
  const component = renderer.create(<ColorPicker />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
