// Duel!
// Nicklas Yuzdepski
// November 18, 2021

let backgroundImage;
let samuraiImage;
let darkSamuraiImage;
let button;
let x;
let y; 
let rectHeight;
let rectWidth;
let samurai;
let vulnerableToAttack = false;
let darkSamurai;
let healthBar;

function preload() {
  backgroundImage = loadImage("assets/sunset-field.jpg");
  samuraiImage = loadImage("assets/Samurai.png");
  darkSamuraiImage = loadImage("assets/Dark-Samurai.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  button = new Button(x, y, rectHeight, rectWidth);
  samurai = new Samurai();
  darkSamurai = new DarkSamurai();
  healthBar = new HealthBar();
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
    healthBar.display(windowWidth*0.25, windowHeight*0.4);
  }

  attackMode() {
    vulnerableToAttack = true;
  }

  defendMode() {
    vulnerableToAttack = false;

  }
  
  parryMode() {
    vulnerableToAttack = true;
    
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
    healthBar.display(windowWidth*0.75, windowHeight*0.4);
  }

  attackMode() {
    vulnerableToAttack = true;
  }

  defendMode() {
    vulnerableToAttack = false;

  }
  
  parryMode() {
    vulnerableToAttack = true;
    
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
  
  display(x, y) {
    this.x = x;
    this.y = y;
    fill(this.color);
    noStroke();
    rect(this.width, this.height);
  }

  damageTaken() {
    this.width - 0.25*this.width;
  }
}

function abilities()
  keyPressed() {
  if (key === "a") {
    samurai.attackMode();
  }
  }  
  if (key === "") {
  } 
  if (key === "e") { 
  }
}


function startScreen() {
  background(fill("white"));
  textFont("Brush Script");
  stroke(5);
  textSize(windowWidth*0.25);
  textAlign(CENTER);
  text("Duel!", windowWidth*0.5, windowHeight*0.25);
  playButton();
  informationButton();
}

function playButton() {
  button.position(windowWidth*0.25, windowHeight*0.5);
  button.display("play");
}

function informationButton() {
  button.position(windowWidth*0.75, windowHeight*0.5);
  button.display("instructions");
  if (button.hasBeenPressed === true) {
    background(fill("white"));
    button.position(windowWidth*0.01, windowHeight*0.01);
    button.display("back");
    
    //title text
    textSize(windowWidth*0.25);
    textFont("Brush Script");
    text("Duel Information", windowWidth*0.5, windowHeight*0.25);

    //other text
    textSize(windowWidth*0.1);
    text("You are a traveler through ancient lands, voyaging into the unknown.", windowWidth*0.5, windowWidth*0.3);
    text ("You find an ancient protector, strategically plan your moves to defeat them, escape with your life and emerge victorious", windowWidth*0.5, windowWidth*0.5);
    
    //image for controls
    image(windowWidth*0.5, windowHeight*0.5);
  }
}

function play() {
  background(backgroundImage);
  samurai.position();
  samurai.display();
  darkSamurai.position();
  darkSamurai.display();
}


// "attack: deal damage to enemy if enemy in attack mode or enemy in parry mode"
// "defend: block if enemy in attack mode"
// "next attack will deal 2x damage, while in this mode, vulnerable to attack"


