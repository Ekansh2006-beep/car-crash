var car ,wall1;
var speed,weight;
function setup() {
  createCanvas(800,400);

  speed=random(55,90)
  weight=random(400,700)
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
if(wall1.x-car.x< (car.width+wall1.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor(255,0,0);
  }
}

if(deformation<180&&deformation>100){
  car.shapeColor(230,230,0);
}

if(deformation<100){
  car.shapeColor=color(0,2555,0);
}


  drawSprites();
}