#!/usr/bin/env node
import * as commands from '../src';

const [, , command, ...args] = process.argv;

if (command === 'init') {
  commands.init();
} else if (command === 'dev') {
  commands.dev();
} else if (command === 'test') {
  commands.test(args);
}
