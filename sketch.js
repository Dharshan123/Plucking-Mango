const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground, tree, treeing;
var boy, boying;
var stone;
var mango1, mongo2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10

function preload() {
treeImg = loadImage("tree.png")
BoyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 480);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground();
	stone = new stone(100,460,23);

  mango1 = new Mango(600,290,34);
  mango2 = new Mango(855,325,35);
  mango3 = new Mango(670,260,35);
  mango4 = new Mango(730,200,35);
  mango5 = new Mango(710,320,36);
  mango6 = new Mango(780,250,35);
  mango7 = new Mango(825,170,33);
  mango8 = new Mango(800,260,35);
  mango9 = new Mango(940,220,35);
  mango10 = new Mango(980,305,35);

  attach = new Throw(stone.body,{x:100,y:465});

  tree = createSprite(775,368);
  tree.addImage(boyImg);
  tree.scale = 0.42;

  boy = createSprite(160,550);
  boy.addImage(boyImg);
  boy.scale = 0.125

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  //strokeWeight(4);

  fill("black");
  textSize(18);

  detectCollision(stone,Mango1);
  detectCollision(stone,Mango2);
  detectCollision(stone,Mango3);
  detectCollision(stone,Mango4);
  detectCollision(stone,Mango5);
  detectCollision(stone,Mango6);
  detectCollision(stone,Mango6);
  detectCollision(stone,Mango7);
  detectCollision(stone,Mango8);
  detectCollision(stone,Mango9);
  detectCollision(stone,Mango10);

  ground.display();
  stone.display();
  tree.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  
  drawSprites();
}

function mouseDragged() {
  Matter.body.set.Position(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  attach.fly();
}

function detectCollision(stone,mango) {
  if(stone.body.position.x - mango.body.position.x < mango.diametre + stone.diametre
    && mango.body.position.x - stone.body.position.x < mango.diametre + stone.diametre
    && stone.body.position.y - mango.body.position.y < mango.diametre + stone.diametre
    && mango.body.position.y - stone.body.position.y < mango.diametre + stone.diametre) {
      Matter.body.setStatic(mango.body,false);
    }
}

function keyPressed() {
  if(keyCode === 32)
  Matter.Body.setPosition(stone.body,{x:100,y:465})
  attach.Launch(stone.body);
}