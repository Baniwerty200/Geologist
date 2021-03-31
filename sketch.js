
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var HAMMER,STONE,RUBBER,GROUND;
function preload(){
	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	HAMMER= new hammer(600,250,40,200);
	RUBBER= new rubber(1100,500,50);
	GROUND= new ground(600,600,50,1200);
	STONE= new stone(300,500,100,100);
	Engine.run(engine);
}


function draw() {
  background("lightBlue");
  drawSprites();
 // Engine.update(engine);
 HAMMER.display("yellow");
 GROUND.display("brown");
 RUBBER.display("blue");
 STONE.display("black");
}



