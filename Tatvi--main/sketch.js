const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var ground;
var world;
var shape1,shape2,shape3;

var squareImg
var rectangleImg
var dodecagonImg
function preload() {
    var squareImg=loadImage("shapes/square1.png")
    var rectangleImg=loadImage("shapes/")
    var dodecagonImg   
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    shape1=new Shape(20,30,40,50);
    shape2=new Shape(30,40,40,50)
    shape3=new Shape(40,50,40,50)

  
}

function draw(){
    background(239,236,139)
    Engine.update(engine);
   
    ground.display();
    shape1.display();
    shape3.display();
    shape2.display();
   



}