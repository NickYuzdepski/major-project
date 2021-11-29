// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundImage;

function preload() {
  backgroundImage = load();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = new Button();
}

function draw() {
  background(220);
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
    if (dist(mouseX, mouseY, this.width/2 - this.x, this.height * 0.7) <= this.size * 2.25) {
      this.Color = fill(220);
  }
    else {
      fill(180);
    }
    
    
    text("start", this.x, this.y);
    fill(this.color);
    rect(this.x, this.y, this.height, this.width);

  mousePressed() {
    if (mouseX = this.x + this.width && (mouseY = this.y + this.length)) {
      play();
    }
  }
}

