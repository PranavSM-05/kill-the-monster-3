const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground1;
var hero;
var rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box1b,box2b,box3b,box4b,box5b,box6b,box7b,box8b,box9b,box10b;
var box1c,box2c,box3c,box4c,box5c,box6c,box7c,box8c,box9c,box10c;
var monster;
var ground2;

function preload(){
  bg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(1500,680,3000,10);

  ground2 = new Ground(1300,500,200,10);

  hero = new Hero(700,200,200,200,0);

  rope = new Rope(hero.body,{x:700,y:100});

  box1 = new Block(1000,640,50,50);
  box2 = new Block(1000,580,50,50);
  box3 = new Block(1000,530,50,50);
  box4 = new Block(1000,480,50,50);
  box5 = new Block(1000,430,50,50);
  box6 = new Block(1000,380,50,50);
  box7 = new Block(1000,330,50,50);
  box8 = new Block(1000,280,50,50);
  box9 = new Block(1000,230,50,50);
  box10 = new Block(1000,180,50,50);

  box1b = new Block(1050,640,50,50);
  box2b = new Block(1050,580,50,50);
  box3b = new Block(1050,530,50,50);
  box4b = new Block(1050,480,50,50);
  box5b = new Block(1050,430,50,50);
  box6b = new Block(1050,380,50,50);
  box7b = new Block(1050,330,50,50);
  box8b = new Block(1050,280,50,50);
  box9b = new Block(1050,230,50,50);
  box10b = new Block(1050,180,50,50);

  box1c = new Block(1100,640,50,50);
  box2c = new Block(1100,580,50,50);
  box3c = new Block(1100,530,50,50);
  box4c = new Block(1100,480,50,50);
  box5c = new Block(1100,430,50,50);
  box6c = new Block(1100,380,50,50);
  box7c = new Block(1100,330,50,50);
  box8c = new Block(1100,280,50,50);
  box9c = new Block(1100,230,50,50);
  box10c = new Block(1100,180,50,50);

  monster = new Monster(1300,300,200,200)
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground1.display();
  hero.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box1b.display();
  box2b.display();
  box3b.display();
  box4b.display();
  box5b.display();
  box6b.display();
  box7b.display();
  box8b.display();
  box9b.display();
  box10b.display();

  box1c.display();
  box2c.display();
  box3c.display();
  box4c.display();
  box5c.display();
  box6c.display();
  box7c.display();
  box8c.display();
  box9c.display();
  box10c.display();

  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX,y: mouseY});
}
