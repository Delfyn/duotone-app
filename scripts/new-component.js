const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const componentDir = path.join(__dirname, '../src/components');
const storybookDir = path.join(__dirname, '../.storybook');

const args = process.argv.slice(2);
const name = args[0];

const showWarning = (text) =>
  console.log(chalk.red.bold(text));

const showWarningAndExit = (text) => {
  showWarning(text);
  process.exit(1);
}

const generateComponent = (name) => (
`/* @flow */

import React from 'react';
import './style.css';

const ${name} = () => (
  <div />
);

export default ${name};
`);

const generateStory = (name) => (
`import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ${name} from './index';

storiesOf('${name}', module)
  .add('Simple example', () => (
    <${name} />
  ));
`
);

const generateTest = (name) => (
`import React from 'react';
import renderer from 'react-test-renderer';
import ${name} from '../index';

test('${name} renders correctly', () => {
  const component = renderer.create(
    <${name} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
`
);

const updateComponentImport = (name) => (
`require('../src/components/${name}/stories.js');
`);

if (!name) {
  showWarningAndExit('Error: No component name specified!');
}

if (name[0] < 'A' || name[0] > 'Z') {
  showWarningAndExit('Error: Component names should begin with a letter, and should be lowercase.');
}

try {
  fs.statSync(path.join(componentDir, name))
  // If we don't error, the file exists
  showWarningAndExit('Error: A component with that name already exists!');
} catch(e) {}

try {
  // create directory
  fs.mkdirSync(path.join(componentDir, name));
  fs.mkdirSync(path.join(componentDir, name, '__tests__'));

  // create component related files
  fs.writeFileSync(path.join(componentDir, name, `index.js`), generateComponent(name));
  fs.writeFileSync(path.join(componentDir, name, `stories.js`), generateStory(name));
  fs.writeFileSync(path.join(componentDir, name, '__tests__', `${name}.test.js`), generateTest(name));
  fs.writeFileSync(path.join(componentDir, name, 'style.css'), '');

  // add story import to storybook
  fs.appendFileSync(path.join(storybookDir, 'stories.js'), updateComponentImport(name))

  console.log(chalk.green.bold(
    `Component ${name} created at ${path.join('src/components/', name)}.`
  ));
} catch(e) {
  showWarningAndExit('Error: Failed to create files.');
}
