// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let button;
let backgroundImage;
let samurai;
let darkSamurai;
let healthBar;
let samuraiImage;
let darkSamuraiImage;

function preload() {
  backgroundImage = loadImage("assets/sunset-field.jpg");
  samuraiImage = loadImage("assets/Samurai.png");
  darkSamuraiImage = loadImage("assets/Dark-Samurai.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  button = new Button(x, y, rectHeight, rectWidth);
  samurai = new Samurai(x, y, rectheight, rectWidth);
  darkSamurai = new DarkSamurai(x, y, height, width);
  healthBar = new HealthBar(x, y);
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
    this.rectHeight = rectWidth;
    this.rectWidth = rectHeight;
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
    rect(this.rectWidth, this.rectHeight);
  }

  //if mouse pressed on button
  mousePressed() {
    if (mouseX <= this.x + this.rectWidth && mouseY <= this.y + this.rectHeight) {
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

  display() {

  }
}

class DarkSamurai {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = darkSamuraiImage;
  }

  display() {

  }
}

class HealthBar {
  constructor(x, y) {
    this.x = x; 
    this.y = y;
    this.width = 20;
    this.height = 10;
    this.color = "green";
  }
  
  position(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    fill(this.color);
    rect(this.height, this.width);
  }
}

function startScreen() {
  background(fill("white"));
  text("Duel!", windowWidth*0.5, windowHeight*0.25);
  textFont("Brush Script");
  stroke(5);
  textSize(40);
  textAlign(CENTER);
  button.position(windowWidth*0.5, windowHeight*0.5);
  button.display("play");
}

function play() {
  background(backgroundImage);
  samurai.display();
  darkSamurai.display();

}


let abilityText = { 
  attackText: text("attack: deal damage to enemy if enemy in attack mode or enemy in parry mode"),
  defendText: text("defend: block if enemy in attack mode"),
  parryText: text("next attack will deal 2x damage, while in this mode, vulnerable to attack"),
};

function displayAbilityButtons() {
  if (button.hasBeenPressed === true) {
    abilityText[attackText];
    abilityText[defendText];
    abilityText[parryText];
}



















//https://www.flickr.com/photos/rodrixap/10688206825
