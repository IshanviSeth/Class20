var fixedRect,movingRect;
var ishanvi,ayusha;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.shapeColor = "pink";
  movingRect.shapeColor = "pink";

  ishanvi = createSprite(650, 80, 50, 50);
  ishanvi.velocityY = 4;

  ayusha = createSprite(650, 350, 50, 50);
  ayusha.velocityY = -4;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
       fixedRect.shapeColor = "blue";
       movingRect.shapeColor = "blue";
    }else {
      
       fixedRect.shapeColor = "pink";
       movingRect.shapeColor = "pink";
    }
  if(ayusha.x - ishanvi.x < ishanvi.width/2 + ayusha.width/2
    && ishanvi.x - ayusha.x < ishanvi.width/2 + ayusha.width/2){
      ishanvi.velocityX = ishanvi.velocityX * (-1);
      ayusha.velocityX = ayusha.velocityX * (-1);
    }
    if(ayusha.y - ishanvi.y < ishanvi.height/2 + ayusha.height/2
      && ishanvi.y - ayusha.y < ishanvi.height/2 + ayusha.height/2){
        ishanvi.velocityY = ishanvi.velocityY * (-1);
        ayusha.velocityY = ayusha.velocityY * (-1);
      }
  drawSprites();
}