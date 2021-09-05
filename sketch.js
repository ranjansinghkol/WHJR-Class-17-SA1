var box_obj;

function setup() 
{
  createCanvas(400, 400);

  box_obj = new Box(200, 200, 50, 50, 4, 4);
}

function draw() 
{
  background(220);

  box_obj.show();
  box_obj.move();
}