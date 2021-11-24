// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundImage;

function preload() {
  backgroundImage = load()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = new Button();
}

function draw() {
  background(220);
}

function mousePressed() {
  if (mouseX = this.x + this.width && (mouseY = this.y + this.length)) {
    toggleState()
  }
}

class Button {
  constructor(x, y, height, width, color, text ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.text = text;
  }

display() {
  fill(this.color);
  rect(this.x, this.y, this.height, this.width);
}

toggleState() {
  let state = 1;
}







}
