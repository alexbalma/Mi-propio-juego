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
 

function preload ()  {
  ball_img = loadImage("./assets/ball.png");
  bg_img = loadImage("./assets/bg.jpg");
  player1_img = loadImage("./assets/player1.png");
  player2_img = loadImage("./assets/player2.png");
}

function setup () {
  createCanvas(windowWidth - 10 ,windowHeight - 10);

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

  ground = Bodies.rectangle(0, 0, width, height,  { isStatic: true });
  World.add(world, ground);
  ground1 = Bodies.rectangle(0, 0, width, height,  { isStatic: true });
  World.add(world, ground);
  ground2 = Bodies.rectangle(0, height, width, height,  { isStatic: true });
  World.add(world, ground);
  ground3 = Bodies.rectangle(width , 0, width, height,  { isStatic: true });
  World.add(world, ground);

  

  rectMode(CENTER);
}

function draw (){
  background(bg_img);

  Engine.update(engine);
 
  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2 , 15 );
  pop();
  
  push();
  translate(ground1.position.x, ground1.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, 15 , height * 2 );
  pop();
  
  push();
  translate(ground2.position.x, ground2.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2 , 15 );
  pop();

  push();
  translate(ground3.position.x, ground3.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0 , height , 15 , height * 2 );
  pop();


  if(player1.isTouching(ball))
  {
    hitBall1();
  }
  if(player2.isTouching(ball))
  {
    hitBall2();
  }

 if(player1.isTocuhing(ball) && mousePressed()) {
  kick1();
  }
  
  if(keyIsDown(UP_ARROW)) {
    player2.position.y -= 8;
  }
  if(keyIsDown(LEFT_ARROW)) {
    player2.position.x -= 8;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    player2.position.x += 8;
  }
  if(keyIsDown(DOWN_ARROW)) {
    player2.position.y += 8;
  }
  

  drawSprites();
}

/*function collide(sprite,x)
{
  if(sprite!=null)
        {
         var d = dist(sprite.position.x,sprite.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}*/

function hitBall1()  {
  ball.x = ball.x += 7;
  ball.y = player1.y;
}

function hitBall2()  {
  ball.x = ball.x -= 7;
  ball.y = ball.y -= 7;
}

function kick1() {
  ball.setVelocityX = 0.5;
}
function kick2() {
  ball.setVelocityX = -0.5;
}