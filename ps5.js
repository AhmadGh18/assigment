let shapes = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 5; i++) {
    shapes.push(
      new Circle(random(20, width - 20), random(20, height - 20), 20)
    );
    shapes.push(
      new Square(random(20, width - 20), random(20, height - 20), 20)
    );
    shapes.push(
      new Triangle(random(20, width - 20), random(20, height - 20), 20)
    );
  }
}

function draw() {
  background(220);
  for (let s of shapes) {
    s.move();
    s.display();
  }
}

// Base class
class Thing {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  checkEdges() {
    this.x = constrain(this.x, this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, this.size / 2, height - this.size / 2);
  }
}

// Circle
class Circle extends Thing {
  move() {
    this.y += random([-2, 2]);
    this.checkEdges();
  }

  display() {
    fill(100, 100, 255);
    ellipse(this.x, this.y, this.size);
  }
}

// Square
class Square extends Thing {
  move() {
    this.x += random([-2, 2]);
    this.checkEdges();
  }

  display() {
    fill(255, 100, 100);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}

// Triangle
class Triangle extends Thing {
  move() {
    this.x += random([-2, 2]);
    this.y += this.x > this.prevX ? 2 : -2;
    this.checkEdges();
    this.prevX = this.x;
  }

  display() {
    fill(100, 255, 100);
    triangle(
      this.x,
      this.y - this.size / 2,
      this.x - this.size / 2,
      this.y + this.size / 2,
      this.x + this.size / 2,
      this.y + this.size / 2
    );
  }

  constructor(x, y, size) {
    super(x, y, size);
    this.prevX = x;
  }
}
