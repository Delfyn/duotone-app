import React from 'react';
import renderer from 'react-test-renderer';
import NewColorPicker from '../index';

test('NewColorPicker renders correctly', () => {
  const component = renderer.create(
    <NewColorPicker />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
