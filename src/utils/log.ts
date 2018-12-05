import chalk from 'chalk';

export const green = (message: string) => console.log(chalk.bold.underline.green(message));
export const red = (message: string) => console.log(chalk.bold.underline.red(message));