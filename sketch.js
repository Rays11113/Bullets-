var  wall, thickness; 
var  bullet, speed, weight;




function setup() {
  createCanvas(1600,400);
 
   speed = random (223, 321);
   weight = random (30, 52);
  thickness = random (22, 83);
   bullet = createSprite (50, 200, 50, 50);
   //bullet.shapeColor = "white";
   wall = createSprite(1200, 200, thickness, height/2);
  // wall.shapeColor = "red";
  
   

   



}

function draw() {
  background("black"); 
  bullet.velocityX = speed;
  bullet.shapeColor = "white"; 
 if (hasCollided (bullet,wall)) {
   var damage = 0.5* weight* speed * speed/(thickness*thickness*thickness) ;
   if (damage>10){

    wall.shapeColor = color(255, 0, 0);
   }
   if (damage<10){
     wall.shapeColor = color (0, 255, 0);
   }
   bullet.velocityX = 0;
 }

  drawSprites();
  //wall.display ();
  //car.display ();
  
}

function hasCollided (lbullet,lwall){

  bulletRightEdge= lbullet.x + lbullet.width;
  WallLeftEdge = lwall.x ;

  if  (bulletRightEdge>=WallLeftEdge) {
    return true;
  }
  return false;
}

