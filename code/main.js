let walkers = [];

function setup() {
  createCanvas(690, 690);
  createDynamicWalkers();

  colorMode(HSB, 360, 255, 255);
  background(0);
}

function createDynamicWalkers() {
  var dr = 10;
  var population = 30;

  for (var j = 0; j < population; j++) {
    var angle = map(j, 0, population, 0, TAU);

    var posX = dr * Math.sin(angle);
    var posY = dr * Math.cos(angle);
    var position = createVector(posX, posY);
    var radius = 1;

    walkers.push(new DynamicWalker(position, radius));
  }
}

function draw() {
  translate(width / 2, height / 2);

  for (var walker of walkers) {
    walker.animate();
    walker.render();
  }
}
