const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1,log2,log3,log4;
var bird;
var bgImage;

function preload() {
  bgImage = loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,20);

  box1 = new Box(400,340,80,80);
  box2 = new Box(600,340,80,80);
  box3 = new Box(400,250,80,80);
  box4 = new Box(600,250,80,80);
  box5 = new Box(500,150,80,80);

  pig1 = new Pig(500,360);
  pig2 = new Pig(500,250);

  log1 = new Log(500,300,350,30,PI);
  log2 = new Log(500,200,350,30,PI);
  log3 = new Log(550,145,160,30,45);
  log4 = new Log(450,140,160,30,135);

  bird = new Bird(100,100);

}

function draw() {
  background(bgImage);  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
  
}