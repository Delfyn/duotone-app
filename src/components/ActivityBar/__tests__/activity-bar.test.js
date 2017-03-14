import React from 'react';
import renderer from 'react-test-renderer';
import ActivityBar from '../index';

test('ActivityBar renders correctly', () => {
  const component = renderer.create(<ActivityBar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ActivityBar renders active state correctly', () => {
  const component = renderer.create(<ActivityBar active />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
