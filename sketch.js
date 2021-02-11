
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	background(144);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject= new roof(width/2,height/4,1000,20);
	bobDiameter=40;
		//Create the Bodies Here.
startbobPositionX=width/2;
startbobPositionY=height/4+500;

bobObject1=new bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
bobObject2=new bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
bobObject3=new bob(startbobPositionX,startbobPositionY,bobDiameter);
bobObject4=new bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
bobObject5=new bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });


	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	rope3=new rope(bobObject3.body,roofObject.body,0,0);
	rope4=new rope(bobObject4.body,roofObject.body,+bobDiameter*1,0);
	rope5=new rope(bobObject5.body,roofObject.body,+bobDiameter*2,0);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
 roofObject.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
}
}
function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;
	roofBodyOffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x.roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y.roofBodyOffset.y;
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}



