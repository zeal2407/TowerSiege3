const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg

function preload(){
img = loadImage("hexagon (1).png")
getBackgroundImg()

}

function setup() {
 createCanvas(800,400);
 engine = Engine.create();
   world = engine.world;

   polygon = Bodies.circle(50,200,20);
   World.add(world, polygon)

   Slingshot = new slingshot(this.polygon,{x:100, y:200});
 

  ground1 = new Ground(600,150,200,10);
  ground2 = new Ground(300,250,200,10);
  ground3 = new Ground(750, 395, 1500, 10)

  block1 = new Box(600,128,35,35)
  block2 = new Box(564,128,35,35)
  block3 = new Box(528,128,35,35)
  block4 = new Box(636,128,35,35)
  block5 = new Box(672,128,35,35)


  block6 = new Box(650,93,35,35)
  block7 = new Box(614,93,35,35)
  block8 = new Box(578,93,35,35)
  block9 = new Box(542,93,35,35)

  block10 = new Box(630,57,35,35)
  block11 = new Box(594,57,35,35)
  block12 = new Box(558,57,35,35)

  block13 = new Box(580,22,35,35)
  block14 = new Box(615,22,35,35)

  block15 = new Box(250,226,35,35)
  block16 = new Box(286,226,35,35)
  block17 = new Box(322,226,35,35)
  block18 = new Box(358,226,35,35)

  block19 = new Box(341,190,35,35)
  block20 = new Box(305,190,35,35)
  block21 = new Box(269,190,35,35)

  block22 = new Box(325,155,35,35)
  block23 = new Box(289,155,35,35)
  block24 = new Box(310,119,35,35)
 

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);
  ground1.display(); 
  ground2.display();
  ground3.display();
  fill("blue")
  block1.display()
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

fill("skyblue")

  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();

  block24.display();

  imageMode(CENTER);
  image(img,polygon.position.x,polygon.position.y,40,40);

  Slingshot.display();

  drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}

function keyPressed(){
	if(keyCode=== 32){
	  Slingshot.attach(this.polygon);
	}
  }
  async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var currentDateTime = responseJSON.currentDateTime;
    var hour = currentDateTime.slice(11,13);
  
    if(hour>=06 && hour<=18){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}