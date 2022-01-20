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
let ableToBlock = false;
let parryDamage = false;
let darkSamurai;
let healthBar;

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
  healthBar = new HealthBar();
}

function draw() {
  startScreen();
  if (button.mousePressed()) {
    play();
  }
}

class Button {
  constructor() {
    this.x = x;
    this.y = y;
    this.rectHeight = windowWidth*0.25;
    this.rectWidth = windowWidth*0.25;
    this.text = text();
    this.textSize = 10;
    this.textAlign = CENTER;
    this.hasBeenPressed = false;
    this.rect = (this.rectHeight, this.rectWidth);
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
    this.image = samuraiImage;
  }

  display() {
    image(samuraiImage, windowWidth*0.25,  windowHeight*0.5);
  }

  health() {
    healthBar.display(windowWidth*0.25, windowHeight*0.4);
  }

  healthLost() {
    healthBar.damageTaken();
  }
  
  attackMode() {
      vulnerableToAttack = true;
      ableToBlock = false;
      parryDamage = false;
  }

  defendMode() {
      vulnerableToAttack = false;
      ableToBlock = true;
      parryDamage = false;
  }
  
  parryMode() {
      vulnerableToAttack = true;
      ableToBlock = false;
      parryDamage = true;
  }
}

class DarkSamurai {
  constructor() {
    this.image = darkSamuraiImage;
  }

  display() {
    image(darkSamuraiImage, windowWidth*0.75, windowHeight*0.5);
  }

  health() {
    healthBar.display(windowWidth*0.75, windowHeight*0.4);
  }

  healthLost() {
    healthBar.damageTaken();
  }

  healthLossFromParry() {
    healthBar.damageTakenFromParry();
  }

  attackMode() {
    vulnerableToAttack = true;
    ableToBlock = false;
    parryDamage = false;
  }

  defendMode() {
    vulnerableToAttack = false;
    ableToBlock = false;
    parryDamage = false;
  }
  
  parryMode() {
    vulnerableToAttack = true;
    ableToBlock = false;
    parryDamage = true;
  }
}

class HealthBar {
  constructor() {
    this.x = x; 
    this.y = y;
    this.width = windowWidth*0.2;
    this.height = windowWidth*0.1;
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

  damageTakenFromParry() {
    this.width - 0.5*this.width;
  }
}

function samuraiAbilities() {
  keyPressed() {
    if (key === "a") {
      samurai.attackMode();
      if (darkSamurai.attackMode() || darkSamurai.parryMode()) {
        darkSamurai.healthLost();
      }
    }
    if (key === "d") { 
      samurai.defendMode();
      //block next attack
    } 
    if (key === "p") { 
      samurai.parryMode();
    }
  }
}


function darkSamuraiAI() {
  let chance = random(3);

  if (chance = 1) {
    darkSamurai.attackMode();
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
    textFont("Brush Script");
    textMode(CENTER);
    text("You are a traveler through ancient lands, voyaging into the unknown.", windowWidth*0.5, windowWidth*0.3);
    text ("You encounter an ancient protector. Strategically plan your moves to defeat them and escape with your life", windowWidth*0.5, windowWidth*0.5);
    
    //image for controls
    image(windowWidth*0.5, windowHeight*0.5);
  }
}

gameMechhanics() {
  

  }
}

function play() {
  background(backgroundImage);
  samurai.display();
  darkSamurai.display();
//   youWin();
//   youLose();
// }

// function youWin() {
//   if (darkSamurai. = 0) {
//     textSize(windowWidth*0.5);
//     textFont("Brush Script");
//     textMode(CENTER);
//     text("You Win", windowHeight*0.5, windoWidth*0.5);
//   }
// }

// function youLose() {
//   if (samurai. = 0) {
//     textSize(windowWidth*0.5);
//     textFont("Brush Script");
//     textMode(CENTER);
//     text("You Lose", windowHeight*0.5, windoWidth*0.5);
//   }
// }


// "attack: deal damage to enemy if enemy in attack mode or enemy in parry mode"
// "defend: block if enemy in attack mode"
// "next attack will deal 2x damage, while in this mode, vulnerable to attack"

