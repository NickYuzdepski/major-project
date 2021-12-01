// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let resolution = 32;
let pixelSize;
let backgroundGrid = [
[3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3],
[2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 3, 3, 3],
[2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 0, 0, 0, 0],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = new Button();
}

function draw() {
  displayBackgroundGrid()
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

function displayBackgroundGrid() {
  for (let y = 0; y < resolution; y++) {
    for (let x = 0; x < resolution; x++) {
      if (grid[y][x] === 0)
      fill("white");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

    
      if (grid[y][x] === 1)
      fill("black");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 2)
      fill("grey");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 3)
      fill("dark grey");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 4)
      fill("light blue");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 5)
      fill("orange");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 6)
      fill("green");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 7)
      fill("purple");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);

      if (grid[y][x] === 8)
      fill("pink");
      strokeWeight(1);
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);


    }
  }
}
