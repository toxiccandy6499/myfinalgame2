const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Astoroid
var bg2
function preload(){
  
  bg2 = loadImage("bg2.jpg");
  player1 = loadImage("player1.png");
  Astoroid = loadImage("Astoroid.png");
 
}

function setup() {
  createCanvas(1200, 600);

 
  
  bg2.addImage
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  
}



function draw() 
{
  background(189);
  drawSprites();
  
image(bg2, 0, 0, width, height);



}




