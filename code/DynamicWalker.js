class DynamicWalker {
  /* Constructor definition */
  constructor(position, radius) {
    this.position = position.copy();
    this.radius = radius;

    this.weightVector = this.getAbsVector();
    this.deltaHue = PI / 666;
    this.hue = 0;
  }

  /* Function definition */
  getAbsVector() {
    var vector = p5.Vector.random2D();
    vector.x = Math.abs(vector.x);
    vector.y = Math.abs(vector.y);

    return vector;
  }

  animate() {
    var g = random(0, 1);
    if (g < 0.009) {
      this.weightVector = this.getAbsVector();
    }

    var weights = [];
    weights.push(this.weightVector.x);
    weights.push(1 - this.weightVector.x);
    weights.push(this.weightVector.y);
    weights.push(1 - this.weightVector.y);

    var utility = new Utility(weights);
    var delta = utility.getMotionDelta();

    this.position.add(delta);
    this.hue += this.deltaHue;
  }

  render() {
    push();
    translate(this.position.x, this.position.y);

    var origin = createVector(0, 0);
    var distance = dist(this.position.x, this.position.y, origin.x, origin.y);
    var noiseValue = sin(this.hue % distance);
    var noiseHue = map(noiseValue, -1, 1, 0, 360);

    stroke(noiseHue, 255, 180, 150);
    strokeWeight(2 * this.radius);
    point(0, 0);
    pop();
  }
}
