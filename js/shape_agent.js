import { shapes } from "./shapes.js";

class ShapeAgent {
  idx = 0;

  constructor(shapes) {
    this.shapes = shapes;
  }

  get currentShape() {
    return this.shapes[this.idx];
  }

  nextShape() {
    // this.idx = this.idx + 1;

    // if (this.idx > this.shapes.length - 1) {
    //   this.idx = 0;
    // }

    this.idx = (this.idx + 1) % this.shapes.length;

    return this.shapes[this.idx];
  }
}

const shapeAgent = new ShapeAgent(shapes);

export default shapeAgent;
