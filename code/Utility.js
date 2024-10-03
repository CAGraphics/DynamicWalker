class Utility {
  /* Constructor definition */
  constructor(weights) {
    this.step = PI / 9;

    this.switches = [];
    this.switches.push(new Switch("left", -weights[0]));
    this.switches.push(new Switch("right", weights[1]));
    this.switches.push(new Switch("up", -weights[2]));
    this.switches.push(new Switch("down", weights[3]));
  }

  /* Function definition */
  getDelta(dimension, idName) {
    var idNames = ["left", "right"];
    if (dimension == 2) {
      idNames = ["down", "up"];
    }

    var switchA = this.switches[dimension];
    var switchB = this.switches[dimension + 1];

    if (idName === idNames[0]) switchB.turnOff();
    if (idName === idNames[1]) switchA.turnOff();

    var aFactor = switchA.getSignedWeight();
    var bFactor = switchB.getSignedWeight();
    switchA.turnOn();
    switchB.turnOn();

    return this.step * (aFactor + bFactor);
  }

  getMotionDelta() {
    var idNameX = random(["left", "right"]);
    var idNameY = random(["down", "up"]);

    var dx = this.getDelta(0, idNameX);
    var dy = this.getDelta(2, idNameY);
    return createVector(dx, dy);
  }
}
