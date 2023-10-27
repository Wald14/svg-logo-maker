// Parent Class
class Shape {
  constructor(){
    this.shape = '';
    this.color = '';
    this.svgCode = '';
  }

  setColor(color){
    this.color = color;
  }

  setShape(shape){
    this.shape = shape;
  }

  setSVGcode(svgCode){
    this.svgCode = svgCode;
  }
}


// Subclass Square
class Square extends Shape {
   render(){ 
    return `<rect x="70" y="20" width="160" height="160" fill="${this.shape.color}" />`
   }
}
// Subclass Circle
class Circle extends Shape {
  render(){
   return `<circle cx="150" cy="100" r="80" fill="${this.shape.color}" />`
  }
}
// Subclass Triangle
class Triangle extends Shape {
  render(){
   return `<polygon points="50,200 150,0 250,200" fill="${this.shape.color}" />`
  }
}



function generateTextCode(text, color) {
  return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}



// Determines which subclass to call based on user shape choice
function generateShape(shape){
  if (shape === 'square'){
    const square = new Square;
    square.setShape('square')
    return square;
  } else if (shape === 'circle'){
    const circle = new Circle
    circle.setShape('circle')
    return circle;
  } else {
    const triangle = new Triangle
    triangle.setShape('triangle')
    return triangle;
  }
}

// Runs through functions needed to generate the SVG file
function generateSVG(data) {
  // Making Shape Object and final Code
  const shape = generateShape(data.shape)
  shape.setColor(data.shapeColor);
  shape.setSVGcode(shape.render())

  // Generate Text Code
  const text = generateTextCode(data.chars, data.charsColor)

  // Generate final SVG text
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.svgCode}
    ${text}
  </svg>
  `
}

module.exports = {generateSVG};