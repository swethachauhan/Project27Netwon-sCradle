
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	//Create the Bodies Here.
	roof=new Roof(400,100,600,20);
	bob1=new Bob(400,300,bobDiameter);
	bob2=new Bob(360,300,bobDiameter);
	bob3=new Bob(320,300,bobDiameter);
	bob4=new Bob(480,300,bobDiameter);
	bob5=new Bob(440,300,bobDiameter);

	rope1=new Rope(bob1.body,roof.body,0,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3=new Rope(bob3.body,roof.body,-bobDiameter*4,0);
	rope4=new Rope(bob4.body,roof.body,bobDiameter*4,0);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
	Render.run(render);
  

  
}


function draw() {
  rectMode(CENTER);
  background(0);
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
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bob3.body,bob3.body.position,{x:-150,y:-200});
	}
}

