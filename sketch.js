const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,20);
  box1 = new Box(500,340,80,80);
  box2 = new Box(550,200,80,80);

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();

  text(mouseX + " , " + mouseY, mouseX, mouseY);
  
}