import React from 'react';
import renderer from 'react-test-renderer';
import UploaderColors from '../index';

test('UploaderColors renders correctly', () => {
  const component = renderer.create(<UploaderColors />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
