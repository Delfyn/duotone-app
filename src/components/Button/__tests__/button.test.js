import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

test('Button renders correctly', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <Button onClick={onClick}>Click here</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(onClick).toBeCalled();
});

test('Button renders className correctly', () => {
  const component = renderer.create(
    <Button className="btn-addon">Click here</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
