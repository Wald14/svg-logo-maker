// packages needed for this application
const {Shape, Square, Circle, Triangle} = require('./shapes.js')

// Generate SVG code for text
function generateTextCode(text, color, shape) {
  let textSVG = '';
  switch (shape) {
    case 'triangle':
      textSVG = `<text x="150" y="175" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
      break;
    default:
      textSVG = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
      break;
  }
  return textSVG;
}


// Determine which subclass to call based on user shape choice
function generateShape(shape) {
  if (shape === 'square') {
    const square = new Square;
    return square;
  } else if (shape === 'circle') {
    const circle = new Circle
    return circle;
  } else {
    const triangle = new Triangle
    return triangle;
  }
}


// Runs through functions needed to generate the SVG file
function generateSVG(data) {
  // Make shape obj
  const shape = generateShape(data.shape)
  shape.setColor(data.shapeColor)

  // Generate for svg file
  const text = generateTextCode(data.chars, data.charsColor, data.shape)

  // Generate final SVG text
  return `
<svg version="1.1" width="300" height="200">
  ${shape.render()}
  ${text}
</svg>
  `
}


// Making avaliable to index.js
module.exports = {generateSVG};