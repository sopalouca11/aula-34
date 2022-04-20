const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine,world
var ground
var box1


function setup() {
  
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,600,1200,20)
  box1 = new Box(900,100,70,70)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (180);
 Engine.update(engine)
 ground.display()
 box1.display()
}

