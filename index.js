// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG} = require('./lib/shapes.js')


// Questions for user
const questions = [
  {
    type: 'maxlength-input',
    message: 'Enter up to 3 characters:',
    name: 'chars',
    validate: charlength => {
      if (charlength.length < 4 && charlength.length > 0) {
        return true
      } else {
        console.log('Please enter 1-3 characters')
      }
    }
  },
  {
    type: 'input',
    message: 'What color do you want the characters?',
    name: 'charsColor',
    validate: charsColor => {
      if (charsColor) {
        return true;
      } else {
        console.log('Please enter a color')
        return false;
      }
    }
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
async function init() {
  const answers = await inquirer.prompt(questions)
  let svgCode = generateSVG(answers);
  writeToSVG('./new_SVG_file/logo.svg', svgCode)
  console.log("Generated logo.svg")
}


init();