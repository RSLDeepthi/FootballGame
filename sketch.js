
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, ballObject,groundObject	;
var world;
var boyObj,boy2obj;
var footballcourt;

function preload(){

	footballcourt = loadImage("footballcourt.png");
	boy2Img = loadImage("boy22.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	boyObj = new Boy(350,500,200,300);
	//boyObj2 = new Boy2(450,500,200,300);
	boy2 = createSprite(650,500,200,300);
	boy2.addImage(boy2Img);
	boy2.scale =0.4;
	
  //boy2.debug = true;
	ballObject=new ball(250,500,70);
	groundObject=new ground(width/2,670,width,100);
	
	//Create a Ground
	
}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background(footballcourt);

  textSize(35);
  stroke("black");
  fill ("purple");
  text("Use mouse to move boy1 and arrow keys to move boy2",300,50);
 
  drawSprites();
  
  ballObject.display();
  
  boyObj.display();

  
  
  
  if(keyDown(UP_ARROW)){

	boy2.y = boy2.y -6;
  }
 
  if(keyDown(DOWN_ARROW)){

	boy2.y = boy2.y + 6;
  }
  if(keyDown(LEFT_ARROW)){

	boy2.x = boy2.x -6;
  }
  if(keyDown(RIGHT_ARROW)){

	boy2.x = boy2.x +6;
  }


  drawSprites();
  
 
}





