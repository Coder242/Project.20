var wall,car;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1350,400);

  speed = random(55,90);
  weight = random(400,1500);

  deformation = (0.5*weight*speed*speed)/22500;

  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1300, 200, 60, height/2);

  car.velocityX = speed;
  car.shapeColor = "white";
  wall.shapeColor = "black";

}

function draw() {
  background("pink");  

    if(car.x-wall.x<wall.width/2+car.width/2 &&
       wall.x-car.x<wall.width/2+car.width/2 &&
       car.y-wall.y<wall.height/2+car.height/2 &&
       wall.y-car.y<wall.height/2+car.height/2 &&
       deformation<100)
       {
        
        car.velocityX = 0;
        car.shapeColor="green";
        textSize(40);
        noStroke();
        fill('green');
        text("It's Sanative",525,height/2);

    }
  
    if(car.x-wall.x<wall.width/2+car.width/2 &&
       wall.x-car.x<wall.width/2+car.width/2 &&
       car.y-wall.y<wall.height/2+car.height/2 &&
       wall.y-car.y<wall.height/2+car.height/2 &&
       deformation>100 &&
       deformation<180)
       {
        
        car.velocityX = 0;
        car.shapeColor="yellow";
        textSize(40);
        noStroke();
        fill('yellow')
        text("It's 'AVERAGE'",525,height/2);
        
    }

    if(car.x-wall.x<wall.width/2+car.width/2 &&
       wall.x-car.x<wall.width/2+car.width/2 &&
       car.y-wall.y<wall.height/2+car.height/2 &&
       wall.y-car.y<wall.height/2+car.height/2 &&
       deformation>180)
       {
        
        car.velocityX = 0;
        car.shapeColor="red";
        textSize(40);
        noStroke();
        fill('red');
        text("It's LETHAL!!",525,height/2);
        
     }

    drawSprites();

}