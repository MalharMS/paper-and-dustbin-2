const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground1;

function preload(){
	boximage = loadImage('dustbin.png');
	bgimg = loadImage('room.jpg')

}

function setup() {
	var canvas = createCanvas(1400, 550);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	dustbin1 = new Dust(1100,530,150,15);
	dustbin2 = new Dust(1155,450,15,170);
	dustbin3 = new Dust(1030,450,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(bgimg);
	Engine.update(engine);

	paper.display();

	dustbin3.display();
	dustbin1.display();
	dustbin2.display();
	image(boximage,975,300,250,350);
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-80});

		}
	}



