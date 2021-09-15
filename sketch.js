/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var jungle, invisiblejungle;
var kangaroo;
var obstaclesGroup, obstacle1;
var invisibleGround
var score=0;

var gameOver, restart;

function preload(){
  kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  jungleImage = loadImage("assets/bg.png");
  shrub1 = loadImage("assets/shrub1.png");
  shrub2 = loadImage("assets/shrub2.png");
  shrub3 = loadImage("assets/shrub3.png");
  obstacle1 = loadImage("assets/stone.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("assets/jump.wav");
  collidedSound = loadSound("assets/collided.wav");
}

function setup() {
  createCanvas(800, 400);

  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;
  invisibleGround=createSprite(400,330,1200,20)
invisibleGround.visible=false

  shrubsGroup = new Group();
  obstaclesGroup = new Group();
  kangaroo=createSprite(50,300,50,50)
  kangaroo.addAnimation("running",kangaroo_running)
  kangaroo.scale=0.1
  kangaroo.setCollider("circle",00,0,300)
  kangaroo.debug=true
  kangaroo.x=camera.position.x-270
  score = 0;

}

function draw() {
  background(255);
 if(gameState==PLAY){
  jungle.velocityX=-10;
  if(jungle.x<0){
    jungle.x=400
  }
  if(keyDown("space")){
    kangaroo.velocityY=-12
  }
  kangaroo.velocityY=kangaroo.velocityY+0.8
 }
else if(gameState==END){

}
  drawSprites();
  kangaroo.collide(invisibleGround)

}


