var fixed,moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  moving= createSprite(200,300,100,20);
  moving.shapeColor="teal";
}

function draw() {
  background(0);  

  moving.x=World.mouseX;
  moving.y=World.mouseY;
   
  if(fixed.x-moving.x<moving.width/2+fixed.width/2 && 
    moving.x-fixed.x<moving.width/2+fixed.width/2 &&
    fixed.y-moving.y<fixed.height/2+moving.height/2 &&
    moving.y-fixed.y<moving.height/2+fixed.height/2){
    fixed.shapeColor="green";
    moving.shapeColor="cyan";
  }
else{
  fixed.shapeColor="red";
  moving.shapeColor="teal";
}






  drawSprites();
}