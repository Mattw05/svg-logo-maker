const {Circle, Square, Triangle} = require("./shapes")

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="75" style="fill:blue" /> `);
    });
});
describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" style="fill:green" /> `);
    });
});