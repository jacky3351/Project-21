const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
	engine = Engine.create();
	world = engine.world

	groundObj = new Ground(660, 750, 2000, 120)
	leftSide = new Ground(1100, 630, 20, 120)
	rightSide = new Ground(1300, 630, 20, 120)

	var ball_options = {
		isStatic:false,
		restitution: 0.4,
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(200, 180, 10, ball_options)
	World.add(world, ball)
	//Create the Bodies Here.
	rectMode(CENTER);
	ellipseMode(RADIUS)
	Engine.run(engine);
}


function draw() {
  background(56);
  ellipse(ball.position.x, ball.position.y, 20)
  groundObj.show()
  leftSide.show()
  rightSide.show()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:1, y:-10})
	}
}

