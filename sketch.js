var enemySprite;
var bg , bgImg ;
var ninja , ninjaImg ;
var bird , birdImg ;
var enemy1 , enemy1Img  , enemy2 , enemy2Img , enemy3 , enemy3Img ;
var weapon , weaponImg ;
//var enemies ;
var enemyGroup ;
var PLAY=1;
var END=0;
var gameState = PLAY;
var gameOverSprite,gameOverImage;

function preload()
{
	bgImg = loadImage("bg.jpg");
	ninjaImg = loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png","ninja5.png","ninja6.png");
	birdImg = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png");
	enemy1Img = loadImage("enemy1.png");
	enemy2Img = loadImage("enemy2.png");
	enemy3Img = loadImage("enemy3.png");
	weaponImg = loadImage("weapon.png");
	gameOverImage=loadImage("gameOver.png");
}

function setup() {

	createCanvas(700, 360);

	
	// moving background 
	bg = createSprite(500,180);
	bg.addImage(bgImg);
	bg.velocityX = -5;


	// creating ninja
	ninja = createSprite(80 , 240 , 50 ,50);
	ninja.scale = 0.8
	ninja.addAnimation("ninja",ninjaImg);
	

	// creating bird
	bird = createSprite(150 , 130 , 20 , 20);
	bird.addAnimation("bird",birdImg);
	bird.scale = 0.5
	bird.x = ninja.x ;

	//game over
	gameOverSprite=createSprite(250,90,10,10);
	gameOverSprite.addImage("gameover",gameOverImage);
	gameOverSprite.visible=false;
	

	// making groups
	enemyGroup = createGroup();
	
}


function draw() {

  background(0);

  if(gameState===PLAY){
	// calling functions
	spawnEnemies();
	
	
	//code to reset the background
  	if(bg.x < 290 ){
    	bg.x = width/2;
  	}


  // creating weapon
  	if(keyDown("space")){
		weapon = createSprite(150 , 240 , 20 , 20);
		weapon.addImage(weaponImg);
		weapon.scale = 0.2 ;
		weapon.velocityX = 4 ;
		weapon.x = ninja.x ;
		weapon.y = ninja.y ;
	}

  // destroying enemies
  	if(ninja.isTouching(enemyGroup)){
		gameState=END
    }  



}

else if(gameState === END){
	bg.velocityX = 0;
	ninja.visible=false;
	bird.visible=false;
	enemyGroup.setVelocityXEach(0);
	enemyGroup.destroyEach();
	enemyGroup.setLifetimeEach(-1);
	gameOverSprite.visible=true;
	

}

   

  // text
   textSize(40)
   fill("red");
   text("ZOOM '175' FOR THE BEST EXPERIANCE", 30 , 20)


  drawSprites();
 
}

function spawnEnemies(){
	if(frameCount % 50 === 0){
		enemySprite= createSprite(Math.round(random ( 700 , 750 )) , Math.round(random ( 255 , 256 )))
		enemySprite.velocityX=-2;
		var rand = Math.round(random(1,2));
		   switch(rand) {
			 case 1: enemySprite.addImage(enemy1Img);
			 enemySprite.scale = 0.5
					 break;
			 case 2: enemySprite.addImage(enemy2Img);
			 enemySprite.scale = 0.4
					 break;
			 default: break;
		   }
		   enemyGroup.add(enemySprite);

	}


}

	
 

			