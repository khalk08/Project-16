var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("running", monkey_running);
 monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

 FoodGroup = createGroup();
 obstacleGroup = createGroup();
  
}

function draw(){
  background("light blue");
  
  text("Score: "+ score, 500,50);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
 if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);  
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroy;
  }
    
  spawnFood();
  spawnObstacles();
 
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
}
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,40);
}

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(200,250,90,20);
    banana.y = random(150,300);    
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(700,310,10,50);
    obstacle.velocityX = -4;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }

  drawSprites();

}




 





