// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Add package to allow a limit to the string length that inquirer accepts
//  https://www.npmjs.com/package/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// const generateSVG = require('./utils/generateSVG.js')

// Questions for user
const questions = [
  {
    type: 'maxlength-input',
    message: 'Enter up to 3 characters',
    name: 'chars',
    maxLength: 3
  }
]

function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
  })
}

init();