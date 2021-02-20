
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var backgroundImage;
var engine, world;
var superhero;
var ground;
var ground1,ground2;
var block1,block2,block3,block4,
block5,block6,block7,block8,block9,block10,block11,block12
,block13,block14,block15,block16,block17,block18;
var rope;
var monster;

function preload() {
//preload the images here
backgroundImage = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  
  superhero = new Superhero(400,300,400,200)
  ground = new Ground(700,790,1700,20)
  ground1 = new Ground(1000,600,500,20)

  block1 = new Block(1000,450,80,80)
  block2 = new Block(920,450,80,80)
  block3 = new Block(1080,450,80,80)
  block4 = new Block(840,450,80,80)
  block5 = new Block(1160,450,80,80)

  block6 = new Block(1000,400,80,80)
  block7 = new Block(1080,400,80,80)
  block8 = new Block(920,400,80,80)

  block9 = new Block(1000,350,80,80)

  block10 = new Block(1000,300,40,40)
  block11 = new Block(920,350,40,40)
  block12 = new Block(1080,350,40,40)
  block13 = new Block(840,420,40,40)
  block14 = new Block(1160,420,40,40)

  ground2 = new Ground(1300,450,200,20)

  rope = new Rope(superhero.body,{x:500,y:150})

  monster = new Monster(1300,430,200,200)
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  superhero.display();
  ground.display();
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();

  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  ground2.display();

  //rope.display();

  monster.display();
}
function mouseDragged(){
  
      Matter.Body.setPosition(superhero.body,{x: mouseX, y: mouseY}) 

}
