#!/usr/bin/env node
import * as commands from '../src';
import { VersionType } from '../src/commands/release';

const [, , command, ...args] = process.argv;

export type Command = keyof typeof commands

const isCommand = (command: string): command is Command => {
  return Object.keys(commands).indexOf(command) >= 0;
};

if (isCommand(command)) {
  if (command === 'test') {
    commands[command](args.length ? args : undefined);
  } else if (command === 'release') {
    commands.release(args.length ? args[0] as VersionType : 'patch');
  } else {
    commands[command]();
  }
} else {
  throw new Error(`invalid command name ${command}`);
}