// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundImage;
let samurai;
let darkSamurai;
let samuraiImage;
let darkSamuraiImage;

function preload() {
  backgroundImage = loadImage("assets/sunset-field.jpg");
  samuraiImage = loadImage("assets/Samurai.png");
  darkSamuraiImage = loadImage("assets/Dark-Samurai.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  button = new Button(x, y, height, width);
  samurai = new Samurai();
  darkSamurai = new DarkSamurai();
}

function draw() {
  startScreen();
  if (button.mousePressed()) {
    play();
  }
}

class Button {
  constructor(x, y, rectHeight, rectWidth, text) {
    this.x = x;
    this.y = y;
    this.rectHeight = rectHeight;
    this.rectWidth = rectWidth;
    this.text = text;
    this.textSize = 10;
    this.textAlign = CENTER;
    this.hasBeenPressed = false;
    this.rect = (this.height, this.width);
    this.color = "grey";
    }
    
    position(x, y) {
      this.x = x;
      this.y = y;
    }
    
    display(text) {
      fill(this.color);
      text(this.text, this.x, this.y);
      textSize(this.textSize);
      textAlign(this.textAlign);
      rect(this.rectHeight, this.rectWidth);
    }

    //if mouse pressed on button
    mousePressed() {
      if (mouseX = (this.x + this.width && mouseY) = (this.y + this.length)) {
        this.hasBeenPressed = true; 
    }
  } 
}

class Samurai {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.image = samuraiImage;
  }
}

class DarkSamurai {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.image = darkSamuraiImage;
  }
}

function startScreen() {
  background("white")
  text("Duel!", 200, 100);
  textFont("Brush Script");
  textSize(40);
  textAlign(CENTER);
  button.position(200, 300);
  button.display("play");
}

function play() {
  background(backgroundImage);
}

let abilityText = { 
  attackText: text("attack: deal damage to enemy if enemy in attack mode or enemy in parry mode"),
  defendText: text("defend: block if enemy in attack mode"),
  parryText: text("next attack will deal 2x damage, while in this mode, vulnerable to attack"),
}

function displayAbilityButtons() {
  if (button.hasBeenPressed === true) {
    abilityText[attackText];
  }

  if (button.hasBeenPressed === true) {
    abilityText[defendText];
  }

  if (button.hasBeenPressed === true) {
    abilityText[parryText];
  }

}



















//https://www.flickr.com/photos/rodrixap/10688206825
