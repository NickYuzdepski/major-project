// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundGrid = [



];

function preload() {
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
    this.size = size;
    this.color = color;
    this.text = text;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.height, this.width);
    textSize(this.size);
    textAlign(CENTER, CENTER);
    text("start", this.x, this.y);
    
  }

  mouseHover() {
  if (dist(mouseX, mouseY, this.width/2 - this.x, this.height) <= this.size) {
    this.Color = fill(211);
  }
  
  else {
    fill(0);
    }
  }
    
  mousePressed() {
    if (mouseX = this.x + this.width && (mouseY = this.y + this.length)) {
      play();
    }
  }
}

