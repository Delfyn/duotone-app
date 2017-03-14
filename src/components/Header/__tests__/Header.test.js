import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../index';

test('Header renders correctly', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
