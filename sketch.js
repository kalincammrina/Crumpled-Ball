const Engine = Matter.Engine;
  const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
    const Render = Matter.Render;

     var dustbin,ground,paper;
     var dustbinImg,paperImg;	
     var world;

    function preload(){
     dustbinImg = loadImage("dustbingreen.png");
     paperImg = loadImage("paper.png");
	  }
    function setup() {
	   createCanvas(1600, 700);
	   rectMode(CENTER);

	   engine = Engine.create();
	   world = engine.world;
	
	   ground = new Ground(width/2,550,width,20);
	   dustbin = new Dustbin(990,530);
     paper = new Paper(120,500,0.1);

	   Engine.run(engine);
    }
    function draw() {
     rectMode(CENTER);
     background(230);

     ground.display();
     dustbin.display();
     paper.display();
    }
    function keyPressed(){
     if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
    }
}