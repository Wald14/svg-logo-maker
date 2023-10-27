// Import the classes and generateSVG function from shapes.js
const { generateSVG, Shape, Square, Circle, Triangle } = require('./shapes');


describe('Shape', () => {
  describe('Square', () => {
    it('should return square svg code with color correctly', () => {
      const shape = new Square();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />')
    })
  })

  describe('Circle', () => {
    it('should return circle svg code with color correctly', () => {
      const shape = new Circle();
      shape.setColor('red');
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
    })
  })

  describe('Triangle', () => {
    it('should return triangle svg code with color correctly', () => {
      const shape = new Triangle();
      shape.setColor('yellow');
      expect(shape.render()).toEqual('<polygon points="50,200 150,0 250,200" fill="yellow" />')
    })
  })

})