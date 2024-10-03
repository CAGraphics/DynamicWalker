class Switch {
  /* Constructor definition */
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
    this.on = 1;
  }

  /* Function definition */
  turnOff() {
    this.on = 0;
  }

  turnOn() {
    this.on = 1;
  }

  getSignedWeight() {
    return this.weight * this.on;
  }
}
