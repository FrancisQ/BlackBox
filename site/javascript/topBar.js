var pauseB = new createjs.Bitmap("../img/pause.png");
var stage = new createjs.Stage("canvas");
function topBar(event){
	pauseB.scaleY = pauseB.scaleX = imgScale;
	
	 
	pauseB.regX = 104;
	
	pauseB.x = canvasW;
	pauseB.y = 0;
	
	stage.addChild(pauseB);
	
	pauseB.addEventListener("click", pauseF);
	/* count = 30; */
	/* pauseButton(); */
	//timer
	
	var ticker = createjs.Ticker.addEventListener("tick", handleTick);
	createjs.Ticker.setInterval(1000);
	 
}//topBar end 
	 
	 
function handleTick(event) {

	   // Actions carried out each tick (aka frame)
	   //Things that remain the same go here!!!
	  if (!createjs.Ticker.getPaused()) {
			//general bar
				var gameHeader = new createjs.Shape();
				gameHeader.graphics.beginFill("black").drawRect(0, 0, 500, 40);
				stage.addChild(gameHeader);
			//Timer text
				var timerText = new createjs.Text(count, "20px Verdana", "orange");
				timerText.y = 5;
				timerText.x = 5;
				/* stage.addChild(timerText); */
				stage.addChild(gameHeader);
				stage.addChild(pauseB);
				/* pauseButton(); */
				life1();
				life2();
				life3();
				score2();
				stage.update();
		}
		
		//Things that change go in here!!
	  if (!event.paused) {


			stage.addChild(timerText);
			stage.addChild(pauseB);	
			stage.update();

			if (count <= 0){
					stage.removeChild(timerText);
					createjs.Ticker.removeEventListener("tick", handleTick);
					loseLife();
					nextGame();
				}
	   
	   }
			
			
			stage.addChild(timerText);	
			stage.update();
			if (count == 24){
				stage.removeChild(timerText);
				stage.addChild(pauseB);			
				stage.update();
			
			 if (count == 0){
					createjs.Ticker.removeEventListener("tick", handleTick);
					stage.removeChild(timerText);
					loseLife();
					nextGame();
				}
			count = count-1;
			/* stage.addChild(timerText);	 */
			stage.update();
	   }

			count--;

	stage.update();
}


function pauseF(event) {
	
	removeTicker();
	pause2();
	
}


function removeTicker(){
	createjs.Ticker.removeEventListener("tick", handleTick);
}
	
function loseLife(){
    if (lives == 3) {
	    achievementTwo();
    }
	lives--;
}
									
//Score
function getScore(){
	currentScore += (count * difficulty);
		return currentScore;
}
			
function score2() {
	var scoreText = new createjs.Text(currentScore, "20px Verdana", "orange");
	scoreText.x = 100;
	scoreText.y = 5;
	stage.addChild(scoreText);
	stage.update();
}

var xM = 10;
//Lives
function life1(){
	if ( lives >= 3){
	var life1 = new createjs.Shape();
	life1.graphics.beginFill("orange").drawPolyStar(250 - xM , 18, 10, 5, 0.6, -90);
	stage.addChild(life1);
	stage.update();
	}
}

function life2(){
	if(lives >= 2){
		var life2 = new createjs.Shape();
		life2.graphics.beginFill("orange").drawPolyStar(230 - xM, 18, 10, 5, 0.6, -90);
		stage.addChild(life2);
		stage.update();
	}
}

function life3(){
	if(lives >= 1){
		var life3 = new createjs.Shape();
		life3.graphics.beginFill("orange").drawPolyStar(210 - xM, 18, 10, 5, 0.6, -90);
		stage.addChild(life3);
		stage.update();
	}
}
