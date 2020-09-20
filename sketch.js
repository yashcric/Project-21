var bullet, wall, speed, weight;
var thickness,damage;
function setup() {
  createCanvas(1600,400);
 
  speed  = random(223,321);
weight = random(30,52);
bullet = createSprite(50,200,50,20);
bullet.shapeColor = "white";
bullet.velocityX = speed;

wall  = createSprite(1200,200,thickness,height/2);
wall.shapeColor="black";
thickness = random(22,83);
damage = weight*speed*speed*0.5/(thickness*thickness*thickness);
}

function draw() {
  background(128,128,128);  

  if(isTouching(bullet,wall)){
    damage = (weight*speed*speed*0.5/thickness*thickness*thickness);

      
      bullet.velocityX = 0;
      if(damage<20){
      wall.shapeColor = "green";
      text("good",1350,100);
      }
      
      if (damage>20)  {
        wall.shapeColor = "red";
        text("bad",1350,100);
      }
    }
   

  drawSprites();
}function isTouching(bullet,wall){
  if(bullet.x-wall.x < wall.width/2+bullet.width/2
    && wall.x- bullet.x < wall.width/2+bullet.width/2 
    &&bullet.y-wall.y < wall.height/2+bullet.height/2
    && wall.y-bullet.y < wall.height/2+bullet.height/2 ){
      return true;
    }
    else{
      return false;
    }
}