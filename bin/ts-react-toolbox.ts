#!/usr/bin/env node
import * as path from 'path';
import * as commands from '../src';

const {2: command, ...args} = process.argv;

if (command === 'init') {
  commands.init(args[3]);
} else if (command === 'dev') {
  const demoPath = path.resolve(__dirname, '../static/example/index.tsx');

  commands.dev(demoPath);
}
