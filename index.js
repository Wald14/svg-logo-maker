// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG} = require('./lib/shapes.js')

// Add package to allow a limit to the string length that inquirer accepts
// https://www.npmjs.com/package/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)


// Questions for user
const questions = [
  {
    type: 'maxlength-input',
    message: 'Enter up to 3 characters',
    name: 'chars',
    maxLength: 3
  },
  {
    type: 'input',
    message: 'What color do you want the characters?',
    name: 'charsColor'
  },
  {
    type: 'list',
    message: 'Choose a shape:',
    name: 'shape',
    choices: [
      {
        name: 'Square',
        value: 'square'
      },
      {
        name: 'Circle',
        value: 'circle'
      },
      {
        name: 'Triangle',
        value: 'triangle'
      }
    ]
  },
  {
    type: 'input',
    message: 'What color do you want the shape to be?',
    name: 'shapeColor' 
  }
]


// Function that writes to SVG file
function writeToSVG(filename, svgCode){
  fs.writeFile(filename, svgCode, (err) => {
    if (err) console.log("Error with writing SVG file")
  })
}


//  Function that initializes the app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    let svgCode = generateSVG(answers);
    writeToSVG('./new_SVG_file/logo.svg', svgCode)
  })
}

init();