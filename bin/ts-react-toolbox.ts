#!/usr/bin/env node
import * as commands from '../src';

const [, , command, ...args] = process.argv;

if (command === 'init') {
  commands.init();
} else if (command === 'dev') {
  commands.dev();
} else if (command === 'test') {
  commands.test(args.length ? args : undefined);
} else if (command === 'build') {
  commands.build();
} else if (command === 'release') {
  commands.release();
} else if (command === 'publish') {
  commands.publish();
}

