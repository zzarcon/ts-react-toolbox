#!/usr/bin/env node
import * as commands from '../src';

const {2: command, ...args} = process.argv;

if (command === 'init') {
  commands.init(args[3]);
}
