const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg,monster01_img,monster02_img,superhero01_img,superhero02_img


function preload() {
backgroundImg=loadImage("Image/GamingBackground.png");
monster01_img=loadImage("Image/Monster-01.png");
monster02_img=loadImage("Image/Monster-02.png");
superhero01_img=loadImage("Image/Superhero-01.png");
superhero02_img=loadImage("Image/Superhero-02.png");

}

function setup() {
  createCanvas(3000, 800);

}

function draw() {

  
 
 ground.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX,y: mouseY});
}

