import React from 'react';
import renderer from 'react-test-renderer';
import Panel from '../index';

test('Panel renders correctly', () => {
  const component = renderer.create(<Panel />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
