//Pick a random game
		
 function nextGame(event) {
			leadAudio.play();
             //variables
             var game = new createjs.Shape();
			 var games = [gameOne, gameTwo, gameThree, gameBoss];
             var randNum = Math.floor(Math.random()*3 )
             var endButton = new createjs.Shape();
			 

            if (lives > 0) {
				if(complete == bossInc){					
					nextChallenge = 3; 
					complete = 0;
					difficulty++;
					bossInc += 3;
					if(firstTime){
						removeTicker();
						instructions();
						firstTime = false;						
					}
					else{
						gameBoss();		
						count = countReset;
						gameBoss();
					}					
				}					
				else{
					nextChallenge = randNum;
					if(firstTime){
						removeTicker();
						instructions();						
					}
					else{
						games[randNum]();
						count = countReset;
						games[nextChallenge]();
					}
				}
            }
			else{
			    stage.removeAllEventListeners();
				endGame2();				

				endGame2(currentScore);				

			}
	 //variables
	/* var game = new createjs.Shape();
	var games = [gameOne, gameTwo, gameThree, gameBoss];
	var randNum = Math.floor(Math.random()*3 )
	var endButton = new createjs.Shape();	 */	
	
 }
//Place holder for end game screen

 
 
//game 1 place holder
function gameOne(difficulty) {
	 
	topBar();
	var backdrop = new createjs.Shape();
	backdrop.graphics.beginFill("blue").drawRect(0,0,canvasW,canvasY);
	stage.addChild(backdrop);
	complete++;
	if (firstGame == true) {
	    achievementOne();
    }
	//stage.update();
 }
 
 
//game 2 place holder
function gameTwo(difficulty) {
	topBar();
	var backdrop = new createjs.Shape();
	backdrop.graphics.beginFill("red").drawRect(0,0,300,500);
	backdrop.graphics.beginFill("red").drawRect(0,0,canvasW,canvasY);
	stage.addChild(backdrop);
	complete++;
    if (firstGame == true) {
	    achievementOne();
    }
	//stage.update();
 }
//game 3 place holder
function gameThree(difficulty) {
	topBar();
	var backdrop = new createjs.Shape();
	backdrop.graphics.beginFill("green").drawRect(0,0,canvasW,canvasY);
	stage.addChild(backdrop);
	complete++;
    if (firstGame == true) {
	    achievementOne();
    }
	//stage.update();
 }
 

function gameBoss(difficulty){
			game1();
 }

 function achievementOne() {
     achieveOne = true;
 }
	
 
