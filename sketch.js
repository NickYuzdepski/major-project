// Duel!
// Nicklas Yuzdepski
// November 18, 2021

//global variable
let backgroundImage;
let backgroundMusic;
let samuraiImage;
let darkSamuraiImage;
let attackSound;
let defendSound;
let parrySound;
let playButton;
let instructionsButton;
let backButton;
let samurai;
let samuraiAttackMode = false;
let samuraiDefendMode = false;
let samuraiParryMode = false;
let darkSamuraiAttackMode = false;
let darkSamuraiDefendMode = false;
let darkSamuraiParryMode = false;
let darkSamurai;
let samuraiHealthBar;
let darkSamuraiHealthBar;
let darkSamuraiAIToggle = false;

//preload assets 
function preload() {
  //soundFormats("mp3");
  backgroundImage = loadImage("assets/sunsetfield.jpg");
  //backgroundMusic = loadSound("assets/samuraimusic.mp3");
  samuraiImage = loadImage("assets/samurai.png");
  darkSamuraiImage = loadImage("assets/darksamurai.png");
  //attackSound = loadSound("assets/attacksound.mp3");
  //defendSound = loadSound("assets/defendsound.mp3");
  //parrySound = loadSound("assets/parrysound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton = new Button(windowWidth*0.25, windowHeight*0.5, "black", "play");
  instructionsButton = new Button(windowWidth*0.6, windowHeight*0.5, "black", "instructions");
  backButton = (windowWidth*0.1, windowHeight*0.1, "grey");
  samurai = new Samurai();
  darkSamurai = new DarkSamurai();
  samuraiHealthBar = new HealthBar(windowWidth*0.25, windowHeight*0.47);
  darkSamuraiHealthBar = new HealthBar(windowWidth*0.75, windowHeight*0.47);
}

function draw() {
  //backgroundMusic.play();
  //startScreen();
  //keyPressed();
  //if (playButton.mousePressed()) {
    //playGame();
  //}
  //if (instructionsButton.mousePressed()) {
    instructionsScreen();
  //}
 }

//button constructor used for all buttons
class Button {
  constructor(x, y, theColor, theText) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.text = theText;
    this.hasBeenPressed = false;
  }
  
//display button
  display() {
    noStroke();
    fill("grey");
    rect(this.x, this.y, 200, 200);
    fill(this.color);
    textSize(0.025*windowWidth);
    textAlign(CENTER);
    text(this.text, this.x + 100, this.y + 100);
  }

  isPointInsideButton() {
    if (dist(mouseX, mouseY, this.x, this.y) < 200) {
      //inside button
      return true;
    }
    else {
      return false;
    }
  }

  //if mouse pressed in button
  mousePressed() {
    if (this.isPointInsideButton() === true) {
      this.hasBeenPressed = true;  
    }    
  } 
}

//samurai class
class Samurai {
  constructor() {
    this.x = windowWidth*0.2;
    this.y = windowHeight*0.7;
    this.image = samuraiImage;
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y);
  }
}

//dark samurai class
class DarkSamurai {
  constructor() {
    this.x = windowWidth*0.75;
    this.y = windowHeight*0.7;
    this.image = darkSamuraiImage;
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, 450, 450);
  }
}

//health bar class used for all health bars
class HealthBar {
  constructor(x, y) {
    this.x = x; 
    this.y = y;
    this.width = windowWidth*0.13;
    this.height = windowHeight*0.03;
    this.color = "green";
  }
  
  //display health bar 
  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }

  //health bar width decreased by 25% when this function is called
  damageTaken() {
    this.width -= 0.25*this.width;
  }

  //health bar width decreased by 50% when this function is called
  damageTakenFromParry() {
    this.width -= 0.5*this.width;
  }
}

//player logic for keys pressed
function keyPressed() {
  if (key === "a") {
    //change ability modes
    samuraiAttackMode = true;
    samuraiDefendMode = false;
    samuraiParryMode = false;
      //check to see if able to damage enemy
      if (darkSamuraiAttackMode === true || darkSamuraiParryMode === true) {
        darkSamuraiHealthBar.damageTaken();
        //attackSound.play();
        //darkSamuraiAI function called 
        darkSamuraiAIToggle = true;
      }
      //darkSamuraiAI function called even if unable to damage enemy
      else {
        darkSamuraiAIToggle = true;
    }
  }
  if (key === "d") { 
    samuraiDefendMode = true;
    samuraiAttackMode = false;
    samuraiParryMode = false;
    //defendSound.play();
    darkSamuraiAIToggle = true;
  }
  if (key === "p") { 
    samuraiParryMode = true;
    samuraiAttackMode = false;
    samuraiDefendMode = false;
    darkSamuraiAIToggle = true;
  }
  if (samuraiParryMode === true) {
    // if "p" is pressed again while in parry mode
    if (key === "p") {
      if (darkSamuraiAttackMode === true || darkSamuraiParryMode === true) {
        darkSamuraiHealthBar.damageTakenFromParry();
        //parrySound.play();
        darkSamuraiAIToggle = true;
      }
      else {
        darkSamuraiAIToggle = true;
      }  
    }
  }
}

//AI logic
function darkSamuraiAI() {
  //AI abilities each set to a random chance of 3 numbers
  let chance = random(1, 4);

  //same logic as player except abilities occur with chance instead of pressing a key
  if (chance === 1) {
    darkSamuraiAttackMode = true;
    darkSamuraiDefendMode = false;
    darkSamuraiParryMode = false;
    if (samuraiAttackMode === true ||  samuraiParryMode === true) {
      samuraiHealthBar.damageTaken();
      //attackSound.play();
      darkSamuraiAIToggle = false;
    }
    else {
      darkSamuraiAIToggle = false;
    }
  }
  if (chance === 2) {
    darkSamuraiDefendMode = true;
    darkSamuraiAttackMode = false;
    darkSamuraiParryMode = false;
    //defendSound.play();
    darkSamuraiAIToggle = false;
  }
  if (chance === 3) {
    darkSamuraiParryMode = true;
    darkSamuraiAttackMode = false;
    darkSamuraiDefendMode = false;
    darkSamuraiAIToggle = false;
    
    if (darkSamuraiParryMode = true) {
      if (chance === 3) {
        if (samuraiAttackMode === true || samuraiParryMode === true)  {
            samurai.damageTakenFromParry();
            //parrySound.play();
        }
      }
    }
  }  
}

function startScreen() {
  background("white");
  stroke(5);
  textSize(windowWidth*0.1);
  textAlign(CENTER);
  text("Duel!", windowWidth*0.5, windowHeight*0.2);
  fill("black");
  playButton.display();
  instructionsButton.display()
}

function instructionsScreen() {
  if (instructionsButton.mousePressed()) {
    background("white");
    //title text
    textSize(windowWidth*0.1);
    textAlign(CENTER);
    stroke(5);
    text("Duel Information", windowWidth*0.5, windowHeight*0.2);
    //instructions text
    textSize(windowWidth*0.015);
    textAlign(CENTER);
    text("You are a traveler through ancient lands, voyaging into the unknown.", windowWidth*0.5, windowHeight*0.3);
    text("You encounter an ancient protector of a tomb: a dark samurai.", windowWidth*0.5, windowHeight*0.4);
    text("Strategically plan your moves to defeat them and escape with your life.", windowWidth*0.5, windowHeight*0.5);
    text("Press a to attack, press d to defend yourself and press p to parry for 2x damage next time you press p.", windowWidth*0.5, windowHeight*0.6);
    backButton.display();
    //if back button pressed sends user back to startscreen
    if (backButton.mousePressed()) {
      startScreen();
    }
  }
}

//main gameplay
function playGame() {
  imageMode(CENTER);
  //image(backgroundImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  samurai.display();
  samuraiHealthBar.display();
  darkSamurai.display();
  darkSamuraiHealthBar.display();
  if (darkSamuraiAIToggle === true) {
    darkSamuraiAI();
  }
  youWin();
  youLose();
}

function youWin() {
  //win condition
  if (darkSamuraiHealthBar.width = 0) {
    textSize(windowWidth*0.3);
    textAlign(CENTER);
    text("You Win", windowHeight*0.5, windowWidth*0.5);
  }
}

function youLose() {
  //lose condition
  if (samuraiHealthBar.width = 0) {
    textSize(windowWidth*0.3);
    textAlign(CENTER);
    text("You Lose", windowHeight*0.5, windowWidth*0.5);
  }
}

