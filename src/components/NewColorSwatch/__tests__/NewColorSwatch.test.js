import React from 'react';
import renderer from 'react-test-renderer';
import NewColorSwatch from '../index';

test('NewColorSwatch renders correctly', () => {
  const component = renderer.create(
    <NewColorSwatch />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
