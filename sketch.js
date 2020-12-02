var sword;
var swordImage;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var fruitGroup;
var score=0;
var alien1;
var alien2;
var alienGroup;
var gameOver;
var knifeSwooshSound;
var gameoverSound;
var gameState="play"

function preload(){
  swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  gameOver=loadImage("gameover.png");
  gameoverSound=loadSound("gameover.mp3");
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
 
}

   function setup() {
  createCanvas(600, 400);
     sword=createSprite(40,360,20,20);
     sword.addImage(swordImage);
     sword.scale=0.7
     fruitGroup=new Group();
     alienGroup=new Group();
   }


function draw(){
    background(180);
  if (gameState==="play"){
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
    knifeSwooshSound.play();
  }
    
  if(alienGroup.isTouching (sword)){
    alienGroup.destroyEach();
    fruitGroup.destroyEach();
    sword.addImage(gameOver);
    sword.x=300;
    sword.y=200;
    gameoverSound.play();
    gameState="end"
    
  }
  spawnFruits();
  spawnAliens();
  }
  drawSprites();
  text("score"+score,500,50)
   
}
function spawnFruits(){
  if(frameCount%200===0){
    var fruit=createSprite(600,Math.round(random(50,350)))
    //generating fruits from both directions
    var r=Math.round(random(1,2));
    if(r===1) {
      fruit.x=600
       fruit.velocityX=-(7+(score/4));
    }
    if (r===2){
      fruit.x=0
      fruit.velocityX=7+(score/4);
    }
    //add respective images for fruit sprite
    var n= Math.round(random(1,4))
    if(n===1) {
      fruit.addImage(fruit1);
    }
      if(n===2) {
      fruit.addImage(fruit2);
    }
       if(n===3) {
      fruit.addImage(fruit3);
    }
      if(n===4) {
      fruit.addImage(fruit4);
    }
    fruit.scale=0.3;
    fruitGroup.add(fruit);
  }
}
function spawnAliens(){
  if(frameCount%250===0){
    var alien=createSprite(600,Math.round(random(50,350)))
    var r=Math.round(random(1,2));
    if(r===1){
      alien.x=600
      alien.velocityX=-(6+(score/10));
      
    }
    if(r===2){
      alien.x=0
      alien.velocityX=(6+(score/10));
    }
    var n=Math.round(random(1,2))
    if(n===1){
      alien.addImage(alien1);
    }
     if(n===2){
      alien.addImage(alien2);
    }
    alienGroup.add(alien);
  }
}
