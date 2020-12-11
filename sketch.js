
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pap, ground, box1, box2, box3 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,800,20);
	pap = new paper(100,100,20,20);
	box1 = new Box(600,680,100,20);
	box2 = new Box(550,630,20,100);
	box3 = new Box(650,630,20,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);

	  pap.display();
	  ground.display();
	  box1.display();
	  box2.display();
	  box3.display();

  
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(pap.body, pap.body.position, {x:20, y:-5});
	}
}




