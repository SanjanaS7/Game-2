const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var PLAY = 1;
var END = 0;
var engine, world;
var player;
var ground, backgroundImg;
var ledge1, ledge2, ledge3, ledge4, ledge5;
var exit;
var gameState = "PLAY";

function preload() {
  backgroundImg = loadImage("Images/cave-background.jpg");
  exitImg = loadImage("Images/exit.png")
}

function setup() {
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1200,20);
    player = new Player(20,550,20,20);

    ledge1 = new Ledge(200,600,175,15);
    ledge2 = new Ledge(350,500,150,15);
    ledge3 = new Ledge(500,400,125,15);
    ledge4 = new Ledge(650,300,100,15);
    ledge5 = new Ledge(800,200,75,15);

    exit = createSprite(800,150,30,50);
    exit.addImage(exitImg);
    exit.scale = 0.10;

}

function draw() {
  
  background(backgroundImg);

  Engine.update(engine);

  if (gameState===PLAY){

  if(keyDown("space") && player.y >= 159) {
    player.velocityY = -12;
  }

  player.velocityY = player.velocityY + 0.8

  player.collide(ground);

    if(exit.isTouching(player)) {
   gameState = END;
    }
  }

  else if (gameState===END){

    textSize(32);
    text('YOU ESCAPED!!!', 10, 30);
    fill(0, 102, 153);

  }


  ground.display();
  player.display();
  ledge1.display();
  ledge2.display();
  ledge3.display();
  ledge4.display();
  ledge5.display();


  drawSprites();
}



