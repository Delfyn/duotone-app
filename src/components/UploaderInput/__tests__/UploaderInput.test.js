import React from 'react';
import renderer from 'react-test-renderer';
import UploaderInput from '../index';

test('UploaderInput renders correctly', () => {
  const component = renderer.create(<UploaderInput />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('UploaderInput renders file description correctly', () => {
  const component = renderer.create(
    <UploaderInput fileName="my-image.png" fileSize={12345} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
