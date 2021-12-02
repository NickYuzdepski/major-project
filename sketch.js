// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundImage;

function preload() {
  backgroundImage = loadImage("assets/sunset-field.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = new Button();
}

function draw() {
  startScreen();
  background(backgroundImage);
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
    if (dist(mouseX, mouseY, this.width/2 - this.x, this.height) <= this.size) {
       fill(220);
  }
    else {
      fill(180);
    }
    
    fill(this.color);
    textSize(this.size);
    textAlign(CENTER, CENTER);
    text("start", this.x, this.y);
    rect(this.x, this.y, this.height, this.width);

    mousePressed() ;{
      if (mouseX = this.x + this.width && (mouseY = this.y + this.length)) {
        play();
      }
    }
  }
}

play() ;{

}


startScreen() ;{
  button.display()
  button.mousePressed()
}

characterSelectionScreen() ;{
  button.mousePressed()
}




















//https://www.flickr.com/photos/rodrixap/10688206825