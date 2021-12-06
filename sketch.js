// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundImage; 

function preload() {
  backgroundImage = loadImage("assets/sunset-field.jpg");
  warriorImage = loadImage("")
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

  //if mouse is hovering over button
  display() {
    if (dist(mouseX, mouseY, this.width/2 - this.x, this.height) <= this.size) {

      fill(220);
    }
    else {
      fill(180);
    }
    
    //display button
    fill(this.color);
    textSize(this.size);
    textAlign(CENTER, CENTER);
    text("start", this.x, this.y);
    rectMode(CENTER);
    rect(this.x, this.y, this.height, this.width);
    }
    
  //if mouse is pressed on button
  mousePressed() {
    if (mouseX = this.x + this.width && (mouseY = this.y + this.length)) {
      stateChanged();
    }
  } 
}

function startScreen() {
  fill("white")
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Duel!")
  button.display();
  button.mousePressed();
}

function characterSelectionScreen() ;{
  fill("black");
  rectMode(CENTER);
  for (i = 0; i < 4; i++) {
    rectMode(CENTER);
    rect(windowHeight/2, i + 100, 50, 50);
  }
 if  (button.mousePressed()) {
   play();
 }
}





















//https://www.flickr.com/photos/rodrixap/10688206825