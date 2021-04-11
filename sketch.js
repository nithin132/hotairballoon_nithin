var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1090,650);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if (keyDown(RIGHT_ARROW)) {
    balloon.velocityX=4;
    balloon.velocityY=0;
   }
   else if (keyDown("left_ARROW")) {
     balloon.velocityX=-4;
     balloon.velocityY=0; 
   }
   else if (keyDown("down_ARROW")) {
     balloon.velocityX=0;
     balloon.velocityY=4;
   }
   else if (keyDown("up_ARROW")) {
     balloon.velocityX=0;
     balloon.velocityY=-4;
   }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
