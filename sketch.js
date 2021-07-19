
var bg1,bg2;
var form;
var edges;
var ship,shipImg;
var alien1,alien2,alien3,alienImg1,alienImg2,alienImg3,alienGroup;
var weaponImg,weaponImg2;
var redStar,blueStar,redImg,blueImg,rGroup,bGroup;
var coin,coinGroup,coinImg;
var fireGroup3,fireGroup4,fireGroup1,fireGroup2;
var explodeImg;
var gameOverImg;
var meteorImg;
var database;
var gameState=0;
var distance=0;
var score=0;
var playerCount;
var game;
var player,allPlayers;
var bgS;

function preload() {
  bg1 = loadImage("Images/Background_1.png");
  bg2=loadImage("Images/Background_2.jpg");
  shipImg=loadImage("Images/SpaceShip.png");
  weaponImg=loadImage("Images/weapon_K.png");
  weaponImg2=loadImage("Images/weapon.png");
  alienImg1=loadImage("Images/Alien_A.png");
  alienImg2=loadImage("Images/Alien_B.png");
  alienImg3=loadImage("Images/Alien_C.png");
  redImg=loadImage("Images/RedStar.png");
  blueImg=loadImage("Images/BlueStar.png");
  coinImg=loadImage("Images/Coin.png");
  explodeImg=loadImage("Images/Explode.png");
  gameOverImg=loadImage("Images/GameOverImg.jpg");
  meteorImg=loadImage("Images/Meteor.png");

  
}

function setup() {
  createCanvas(displayWidth*1.5,displayHeight);

  database=firebase.database();

  

  gameState=0;
  distance=0;
  xVel=0;
  yVel=0;

  game=new Game();
  game.start();
  game.getState();

 

  
  
}

function draw() {

  background(bg1);

  if(playerCount===1){
    game.update(1);
  }

  if(gameState===1){
    game.play();
    
  }

  if(alienGroup.isTouching(ship)){
    game.update(2);
  }

  if(gameState===2){
    game.end();
  }
  

 
  

  

  drawSprites();
  

  
}