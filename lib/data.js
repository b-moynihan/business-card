const chalk = require("chalk");
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');

const questions = [
  {
      type: "list",
      name: "action",
      message: "What you want to do?",
      choices: [
          {
              name: `Send me an ${chalk.green.bold("email")}?`,
              value: () => {
                  open("mailto:moynihanbrid@gmail.com");
                  console.log("\nDone, talk to you soon.\n");
              }
          },
          {
              name: "Just quit.",
              value: () => {
                  console.log("Slán go fóill. \n");
              }
          }
      ]
  }
];

const about = {
  name: chalk.bold.magenta("          Bríd Moynihan"),
  handle: chalk.white("@b-moynihan"),
  work: `${chalk.white("Data Engineer at")} ${chalk.hex("#2b82b2").bold("Glofox")}`,
  github: chalk.gray("https://github.com/") + chalk.green("b-moynihan"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("bríd-m-0300b516b"),
  web: chalk.cyan("https://bridmoynihan.me"),
  npx: chalk.red("npx") + " " + chalk.white("b-moynihan-business-card"),

  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

module.exports = ({questions, about}) => `
${questions}
${about}`