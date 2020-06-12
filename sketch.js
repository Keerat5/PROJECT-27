const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
	createCanvas(1500,850);

	engine = Engine.create();
  world = engine.world;
  
  bobdiameter = 10;


	roof = new Roof(625,123,400,50);

	bob1 = new Bob(487,440,70);
	bob2 = new Bob(557,440,70);
	bob3 = new Bob(627,440,70);
	bob4 = new Bob(697,440,70);
	bob5 = new Bob(767,440,70);

	rope1 = new Rope(bob1.body,roof.body,-160,0);
	rope2 = new Rope(bob2.body,roof.body,-80,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,80,0);
	rope5 = new Rope(bob5.body,roof.body,160,0);

	Engine.run(engine);
  
}

function draw() {
  background('silver');

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 


  textSize(20);
  text("x:"+mouseX,100,100); 
  text("y:"+mouseY,100,130);
  
  drawSprites();
 
}



