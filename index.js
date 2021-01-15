'use strict';

const app = require('commander');
const inquirer = require('inquirer');
const setupQuestions = require('./settings/setupQuestions.json');

const receiver = (options) => {
  
  inquirer
    .prompt(setupQuestions)
    .then(answers => {
      console.log(answers)
    })
    .then(result => {
      console.log(result);
      process.exit();
    })
    .catch(error => {
      console.error(error);
      process.exit();
    })
}

app
  .version('1.0.0')
  .description('Please set up your project')
  .action(receiver);

app.parse(process.argv);