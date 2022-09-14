const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine; 
let world; 
var player1, player2;
var player1_img, player2_img;
var ball, ball_img;
var score1, score2;
var bg_img;
//var wall1, wall2, wall3, wall4, wall5,wall6, wall7;
var ground1; 

function preload ()  {
  ball_img = loadImage("./assets/ball.png");
  bg_img = loadImage("./assets/bg.jpg");
  player1_img = loadImage("./assets/player1.png");
  player2_img = loadImage("./assets/player2.png");
}

function setup () {
  createCanvas(windowWidth ,windowHeight );

  engine = Engine.create();
  world = engine.world;

  player1 = createSprite(250,500,50,50);
  player1.addImage(player1_img);
  player1.scale = 0.17;

  player2 = createSprite(700,600,50,50);
  player2.addImage(player2_img);
  player2.scale = 0.04;

  ball = createSprite(500,500,20,20);
  ball.addImage(ball_img);
  ball.scale = 0.15;

  ground1 = new Ground1(500,300,20,50);

  

  rectMode(CENTER);
}

function draw (){
  background(bg_img);

  Engine.update(engine);
  ground1.show();

  
  if(keyIsDown(UP_ARROW)) {
    player1.position.y -= 8;
  }
  if(keyIsDown(LEFT_ARROW)) {
    player1.position.x -= 8;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    player1.position.x += 8;
  }
  if(keyIsDown(DOWN_ARROW)) {
    player1.position.y += 8;
  }
  

  drawSprites();
}


