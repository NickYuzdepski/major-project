// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let knight;
let samurai;
let backgroundImage;
let knightImage;
let samuraiImage;
 
function preload() {
  backgroundImage = loadImage("assets/sunset-field.jpg");
  knightImage = loadImage("assets/Knight.png");
  samuraiImage = loadImage("assets/Samurai.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = new Button();
  knight = new Knight();
  samurai = new Samurai();
}

function draw() {
  startScreen();
}

class Button {
  constructor(x, y, height, width, color, text ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.text = text;
    this.hasBeenPressed = false;
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
    text(this.text, this.x, this.y);
    rectMode(CENTER);
    rect(this.x, this.y, this.height, this.width);
  }
    
  //if mouse pressed on button
  mousePressed() {
    if (mouseX = this.x + this.width && (mouseY = this.y + this.length)) {
      this.hasBeenPressed;
    }
  } 
}

class Knight {
  constructor(x, y, height, width, text) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.text = abilityText;
    this.image = knightImage;

  }
}

class Samurai {
  constructor(x, y, height, width, text) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.text = text;
    this.image = samuraiImage;
  }
}

function startScreen() {
  fill("white");
  textFont("Brush Script");
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Duel!");
  button.display();
  button.mousePressed();
}


let abilityText = { attackText: text("attack: deal damage to enemy if enemy in attack mode or enemy in parry mode"),
  defendText: text("defend: block if enemy in attack mode"),
  parryText: text("defend: block if enemy in attack mode"),
}



display() {;
  if (button.hasBeenPressed = true && button.mousePressed()) {
    abilityText[attackText];
  }

  if (button.hasBeenPressed = true && button.mousePressed()) {
    abilityText[defendText];
  }

  if (button.hasBeenPressed = true && button.mousePressed()) {
    abilityText[parryText];
  }
}



//ability descriptions
//text("attack: deal damage to enemy if enemy in attack mode or enemy in parry mode")
//text("parry: next attack will deal 2x damage, while in this mode, vulnerable to attack")
//text("defend: block if enemy in attack mode")




//https://www.flickr.com/photos/rodrixap/10688206825