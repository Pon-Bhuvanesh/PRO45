const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15;
var hero,monster,monster1,rope,ground;

function preload() {
  bg = loadImage("Bg.PNG");
}

function setup() {
  createCanvas(3000, 1000);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 670, 1500, 25);

  hero = new Hero(200,500,150);
  rope = new Rope(hero.body, { x: 160, y: 80 });
  monster = new Monster(900,250,200);
  monster1 = new Monster(1200,250,200);

  box1 = new Box(650, 150, 30, 30);
  box2 = new Box(650, 150, 75, 75);
  box3 = new Box(650, 150, 75, 75);
  box4 = new Box(650, 150, 75, 75);
  box5 = new Box(650, 150, 75, 75);
  box6 = new Box(750, 200, 40, 40);
  box7 = new Box(750, 200, 78, 78);
  box8 = new Box(750, 200, 78, 78);
  box9 = new Box(750, 200, 78, 78);
  box10 = new Box(750, 200, 80, 80);
  box11 = new Box(1050, 250, 45, 45);
  box12 = new Box(1050, 250, 80, 80);
  box13 = new Box(1050, 250, 80, 80);
  box14 = new Box(1050, 250, 80, 80);
  box15 = new Box(1050, 250, 80, 80);
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  textSize(45)
  fill("White")
  text("🥇",1018,285)
  textSize(25)
  fill("Red")
  text("Child Marriage",800,520)
  textSize(35)
  fill("white")
  text("education",560,320)

  ground.display();
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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  

  hero.display();
  rope.display();
  monster.display();
  monster1.display();
}
