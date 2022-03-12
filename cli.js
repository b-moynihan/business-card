#!/usr/bin/env node
'use strict'
const minimist = require('minimist')
const questions = require('./lib/questions')
const pkg = require('.')
const inquirer = require("inquirer");
const chalk = require("chalk");

// Parse input flags
const options = {
  alias: { cow: 'f', rand: 'r' }
}
const argv = minimist(process.argv.slice(2), options)

// Generate random hex colour for cow 
const randomColour = "#000000".replace(/0/g, function(){
  return (~~(Math.random()*16)).toString(16);
});

console.log(chalk.hex(randomColour)(pkg(argv)))

// Ask questions and perform respective actions
const prompt = inquirer.createPromptModule();
prompt(questions).then(answer => answer.action());