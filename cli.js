#!/usr/bin/env node

const minimist = require('minimist')
const pkg = require('..')

'use strict'

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
clear();

const prompt = inquirer.createPromptModule();

const options = {
  alias: { json: 'j', cow: 'f' }
}
const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))