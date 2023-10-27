// Parent Class
class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }
}

// Subclasses Square, Circle, and Triangle
class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50,200 150,0 250,200" fill="${this.color}" />`
  }
}

// Making avaliable to generateSVG.js
module.exports = {Shape, Square, Circle, Triangle}