
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var groung,grondImage
var survivalTime=0
var bananaGroup,bananaImage
var obstacleGroup,obstacleImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
  monkey.addAnimation('moving', monkey_running )
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
   if (ground.x < 0){
      ground.x = ground.width/2;
        ground.velocityX = -4
     
     bananasGroup=createSprite()
     obstacleGroup=createSprite()
     
   }
  
}


function draw() {

    background(10000  );

  
      if(keyDown("space")&& monkey.y >= 310 ) {
        monkey.velocityY = -13;
        
      }
        
        
        
    monkey.velocityY = monkey.velocityY + 0.8

    
stroke('white')
textSize  (20)
fill('white')  
text('score:'+score,500,50)
  
   stroke('black')
  textSize(20)
fill('black')
  survivalTime=Math.ceil(frameCount/frameRate())
text('survival Time:'+ survivalTime,100,50) 
  
    monkey.collide(ground);



spawnobstacle()

  spawnbananas();

  drawSprites();

}

function spawnbananas() {

  if (frameCount % 80 === 0) {
     banana = createSprite(600,50,40,10);
    banana.y = Math.round(random(200 ,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 250;
    
banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }}
    function spawnobstacle(){
      
   if (frameCount % 300=== 0) {
     obstacle = createSprite(600,315,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 250

    
   }
    
   
    

  

}