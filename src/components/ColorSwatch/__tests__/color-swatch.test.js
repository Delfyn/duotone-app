import React from 'react';
import renderer from 'react-test-renderer';
import ColorSwatch from '../index';

test('ColorSwatch renders correctly', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <ColorSwatch primary="#ff0000" secondary="#00ff00" onClick={onClick} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(onClick).toBeCalled();
});

test('ColorSwatch renders different sizes correctly', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <ColorSwatch
      primary="#ff0000"
      secondary="#00ff00"
      onClick={onClick}
      size={64}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ColorSwatch renders rotations sizes correctly', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <ColorSwatch
      primary="#ff0000"
      secondary="#00ff00"
      onClick={onClick}
      size={64}
      rotate={-45}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
