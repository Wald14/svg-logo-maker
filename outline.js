/*
OUTLINE

1. Use inquirer to ask for 
    a. text (limit of 3 characters)
    b. text color keyword (OR a hexadecimal number)
    c. shape (circle, triangle, and square)
    d. shape color keyword (OR a hexadecimal number)

2. Create Classes for each shape
    a. class Shapes(userChars, userCharsColor, userShape, userShapeColor)
        this.size: 200x300
        this.chars: userChars
        this.charsColor: userCharsColor
        this.shape: userShape
        this.shapeColor: userShapeColor

        setColor(userColor) {
            this.color = userColor
          }

    b. class Circle extends Shapes
        super(shapeColor)

        render(){
          return ' <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />'
        }

    c. repeat with class Square/Triagle
    e. repeat for class Text

    NOTE: each shape needs to be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    NOTE: each shape should have a "setColor(userColor)"method

    Example of render test
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    My Example
    const shape = new Circle(blue);
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue');

    const char = new Chars(blue);
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue');


3. Method to create shape code
    const shape = new Square/Triangle/Circle
    shapeCode = shape.render(userColor) // Add color info

    const text = new Text
    textCode = text.render(userChar, userColor)

    function svgCode() {
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeCode}
        ${textCode}
      </svg>
    }

    fs.writeFile('logo.svg', svgCode)


4. Generate logo.svg file from shape code (200x300px)
5. Console.log("Generated logo.svg")







SVG CODE FOR SHAPES:

Square
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="30"/>
</svg>

    x position of the top left corner
    y position of the top left corner
    width = width
    height = height

Circle
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>

  r = radius
  cx = x position of the center of the circle
  cy = y position of center of the circle

Triangle
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <poly points="0,200 150,0 300,200">
</svg>

    points="x,y x,y x,y"

*/
