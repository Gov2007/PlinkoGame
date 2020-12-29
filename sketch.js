const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var division=[];
var ground;
var divisions;


var divisionHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
 
  for(var k = 0; k <=width; k = k+80){
    division.push(new Division (k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background(0);
  if(frameCount % 30 === 0){
    particle = new Particles(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<division.length;k++){
    division[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


 
 ground.display();

  drawSprites();
}