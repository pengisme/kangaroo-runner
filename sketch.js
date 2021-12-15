var PLAY= 1;
var END= 0;
var gameState= PLAY;

var kangaroo, kangaroo_running, kangaroo_collided;
var backgroundimg
var score=0;
var gameOver, restart;

function preload(){
backgroundimg = loadimage("backgroundimg.png")

kangaroo_running= loadAnimation("kangaroo.jpg");
kangaroo_collided= loadAnimation("kangaroo2.jpg");

gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.jpg");
FireImg= loadImage("fire.jpg");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 kangaroo = createSprite(50,height,-70,20,50);

 kangaroo.addAnimation("running", kangaroo_running);
 kangaroo.addAnimation("collided", kangaroo_collided);
 kangaroo.setCollider('circle', 0,0,350)
 kangaroo.scale= 0.08;

 invisibleGround= createSprite(width/2,height-10,width,125);
 invisibleGround.shapeColor = "#f4cbaa";

gameOver= createSprite(width/2, height/2-50);
gameOver.addImage(gameOverImg);
restart= createSprite(width/2,height/2);
restart.addImage(restartImg);

gameOver.scale = 0.5;
restart.scale=0.1;

gameOver.visible=false;
restart.visible=false;
}

function draw() {
 backgroundimg(backgroundimg);
 textSize(20);
 Fill("black")
 text("score: "+score,30,50);

 if(gameState===PLAY){
     score= score + Math.round(getFrameRate()/60);
     ground.velocityX= -(6+ 3*score/100);

     if((touches.length > 0 || keyDown("SPACE")) && kangaroo.y >=height-120){
         kangaroo.velocityY = -10;
         touches= [];
     }
     kangaroo.velocityY = kangaroo.velocityY + 0.8

     if(ground.x< 0){
         ground.x = ground.width/2;
     }

     kangaroo.collide(invisibleGround);
     spawnFire();

     if(fire.isTouching(trex)){
         gameState= END;
     }
 }
 else if(gameState===END){
     gameOver.visible = true;
     restart.visible = true;
gameOver.visible = true;
restart.visible = true;

ground.velocityX = 0;
kangaroo.velocityY = 0;
fire.setVelocityXEach

fire.setLifetimeEach(-1);

if(touches.length>0 || keyDown("SPACE") || mousePressedOver(restart)){
    reset();
    touches = []
}
 }

 drawSprites();
}

function spawnFire(){
    if (frameCount % 60 === 0){
        var fire = createSprite(600,height-95,20,30);
        fire.setCollider('circle',0,0,45)
        
        var rand = Math.round(random(1,2));

        switch(rand){
            case 1: fire.addImage(obstacle1);
            break;
            default: break;
        }
        
        fire.scale = 0.3;
        fire.lifetime = 300;
        fire.depth = kangaroo.depth
        kangaroo.depth +=1;

    }
}
function reset{
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;

    fire.destroyEach
    
    score= 0;
}
