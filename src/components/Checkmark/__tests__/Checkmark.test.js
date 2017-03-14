import React from 'react';
import renderer from 'react-test-renderer';
import Checkmark from '../index';

test('Checkmark renders correctly', () => {
  const component = renderer.create(<Checkmark />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkmark renders colors correctly', () => {
  const component = renderer.create(<Checkmark color="#fd3659" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
