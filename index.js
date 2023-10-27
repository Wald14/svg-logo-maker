// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG} = require('./lib/generateSVG.js')


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
        console.log('Try again, only enter 1-3 characters')
      }
    }
  },
  {
    type: 'input',
    message: 'Enter what color do you want the characters to be by color keyword or hexadecimal?',
    name: 'charsColor',
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
    message: 'Enter what color do you want the shape to be by color keyword or hexadecimal?',
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