var sea,ship;
var seaImg,shipImg;

function preload(){
  //The code to add animation to ship 

  shipImg = loadAnimation("ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,440);
  //background("blue");

  // Moving background
  sea = createSprite(400,200,400,400);
  sea.addImage(seaImg);
  sea.velocityX = -3;
  sea.scale=0.3;

  // Adding the Ship Sprite
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
    //sea.y = height;
  }

 
  drawSprites();
} 