
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject, suspender;
var mango1 ,mango2, mango3, mango4, mango5, mango6;
var world,boy;
0
function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1100,200,30);
	mango3 = new mango(1200,150,30);
	mango4 = new mango(1000,120,30);
	mango5 = new mango(900,200,30);
	mango6 = new mango(1010,220,30);

	stoneObj = new Stone(240,420,20);
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	suspender = new Suspender(stoneObj.body,{x:240, y:425});
	
	Engine.run(engine);

}

function draw() {

  background(230);
 
  stroke("black"); 
  fill('black');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stoneObj.display();

  groundObject.display();

  suspender.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
}


function keyPressed()
{
 if(keyCode === 32){
  Matter.Body.setPosition(stoneObj.body, {x:240, y:420})
  suspender.attach(stoneObj.body);	 
 }
}


function mouseDragged()
{
 Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
}


function mouseReleased()
{
 suspender.fly();
}


function detectollision(lstone,lmango)
{
 mangoBodyPosition=lmango.body.position	
 stoneBodyPosition=lstone.body.position
 
 var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,
	mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
	 Matter.Body.setStatic(lmango.body,false)	
	}
}