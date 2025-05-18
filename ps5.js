let circles = [];

class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  display() {
    ellipse(this.x, this.y, this.size);
  }
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 50);
    circles.push(new Circle(x, y, size));
  }
}

function draw() {
  background(220);
  for (let c of circles) {
    c.move();
    c.display();
  }
}
