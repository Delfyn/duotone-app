import React from 'react';
import renderer from 'react-test-renderer';
import NewColorPicker from '../index';

test('NewColorPicker renders correctly', () => {
  const onAddDuotoneClick = jest.fn();
  const onSetDuotoneClick = jest.fn();
  const onSetPrimaryClick = jest.fn();
  const onSetSecondaryClick = jest.fn();

  const component = renderer.create(
    <NewColorPicker
      className="example"
      primary="#fd3659"
      secondary="#243261"
      onAddDuotoneClick={onAddDuotoneClick}
      onSetDuotoneClick={onSetDuotoneClick}
      onSetPrimaryClick={onSetPrimaryClick}
      onSetSecondaryClick={onSetSecondaryClick}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[0].children[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[1].children[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[2].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(onSetDuotoneClick).toBeCalled();

  tree.children[3].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(onAddDuotoneClick).toBeCalled();
});
