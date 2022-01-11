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
  button = new Button();
  samurai = new Samurai();
  darkSamurai = new DarkSamurai();
}

function draw() {
  startScreen();
  if (button.mousePressed()) {
    background(backgroundImage);
  }
}

class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.textSize = 10;
    this.textAlign = CENTER, CENTER;
    this.hasBeenPressed = false;

    display(height, width, text) ;{
      this.text = text;
      this.rect = (this.height, this.width);
      this.color = "grey";
    }
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
    this.height = height;
    this.width = width;
    this.image = darkSamuraiImage;
  }
}

function startScreen() {
  fill("white");
  textFont("Brush Script");
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Duel!");
  button.display(20,20, "play");
}

let abilityText = { 
  attackText: text("attack: deal damage to enemy if enemy in attack mode or enemy in parry mode"),
  defendText: text("defend: block if enemy in attack mode"),
  parryText: text("next attack will deal 2x damage, while in this mode, vulnerable to attack"),
};

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
