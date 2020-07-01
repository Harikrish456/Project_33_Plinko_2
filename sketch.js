var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var score = 0;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background("black");
  textSize(20)
  stroke("blue");
  text("Score : "+score,100,100);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  // }
 
 // for (var j = 0; j < particles.length; j++) {
   
   //  particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   stroke("blue");
   text("500",25,600);
   text("500",100,600);
   text("500",175,600);
   text("500",250,600);
   text("100",325,600);
   text("100",410,600);
   text("100",490,600);
   text("200",570,600);
   text("200",645,600);
   text("200",730,600);
  
   stroke("yellow");
   line(0,400,800,400);

   if(particle != null){
    particle.display();

    var X = particle.body.position.x;

   if(particle.body.position.y > 400){

   if(X < 300){
     score = score + 500;
    particle = null;
    if(turn >= 5){
      gameState ="end";
    }
   }
   
   if(X > 301 && X < 600){
    score = score + 100;
    particle = null;
    if(turn >= 5){
      gameState ="end";
    }
   }
   if(X > 601 && X < 900){
    score = score + 200;
    particle = null;
    if(turn >= 5){
     gameState ="end";
   }
 }

 if(turn >= 5){
   text("Game Over!",150,400);
 }
 //particle.display();
// particle=null;
  }
   }


   
  
}

function mousePressed (){
  stroke("yellow");
  text("b",400,400);
  if(gameState !== "end"){
    turn = turn + 1;
    particle = new Particle(mouseX,10,10,10);
   // particle.display();
    stroke("yellow");
  text(particle.body.position.x,500,500);
  }
}