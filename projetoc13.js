var garden,rabbit;
var gardenImg,rabbitImg;

var select_sprites = Math.random(random(1,3));

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createAples()
  } else if (select_sprites == 2){

  }
    createOrange
} else{
  createRed
}






function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();



}
function createAples{

  aple = createSprite(50,350),40,10, 10);
  aple.addImage(appleImg)
aple.velocityY = 3
aple.lifetime = 150




}
function createOrange{

  orange = createSprite(50,350),40,10, 10);
  orange.addImage(orangeImg)
orange.scale=0.08
  orange.velocityY = 3
orange.lifetime = 150
}
function createRed{

  red = createSprite(50,350),40,10, 10);
  red.addImage(redImg)
  red.scale=0.08
  red.velocityY = 3
red.lifetime = 150