import React from 'react';
import renderer from 'react-test-renderer';
import DragOverlay from '../index';

test('DragOverlay renders correctly', () => {
  const component = renderer.create(<DragOverlay />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
