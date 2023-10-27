// Parent Class
class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }
}


// Subclass Square
class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
  }
}
// Subclass Circle
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}
// Subclass Triangle
class Triangle extends Shape {
  render() {
    return `<polygon points="50,200 150,0 250,200" fill="${this.color}" />`
  }
}


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


// Determines which subclass to call based on user shape choice
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
  // Making Shape Object and final Code
  const shape = generateShape(data.shape)
  shape.setColor(data.shapeColor)

  // Generate Text Code
  const text = generateTextCode(data.chars, data.charsColor, data.shape)

  // Generate final SVG text
  return `
  <svg version="1.1" width="300" height="200">
  ${shape.render()}
  ${text}
  </svg>
  `
}

module.exports = { generateSVG };