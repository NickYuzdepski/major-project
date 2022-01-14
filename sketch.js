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
  constructor() {
    this.x = windowWidth*0.25;
    this.y = windowHeight*0.5;
    this.image = samuraiImage;
  }

  position() {
    this.x = windowWidth*0.25;
    this.y = windowHeight*0.5;
  }

  display() {
    image(samuraiImage);
  }
}

class DarkSamurai {
  constructor() {
    this.x = windowWidth*0.75;
    this.y = windowHeight*0.5;
    this.image = darkSamuraiImage;
  }

  position() {
    this.x = windowWidth*0.75;
    this.y = windowHeight*0.5;
  }

  display() {
    image(darkSamuraiImage);
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

function keyPressed() {
  //player 1 keys
  if (key === "q") {
    attack();
  }  
  if (key === "w") {
    defend();
  } 
  if (key === "e") { 
    parry(); 
  }
  //player 2 keys
  if (key === "i") {
    attack();
  }
  if (key === "o") {
    defend();
  }
  if (key === "p") {
    parry();  
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
  samurai.position()
  samurai.display();
  darkSamurai.position();
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
}

function attack() {
  if (samurai.attack === true && samurai.parry === true) {
  }
}

function defend() {

}

function parry() {

}