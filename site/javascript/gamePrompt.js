var games = [game0Tips, game1Tips, game2Tips, game3Tips];
var tempContainer = new createjs.Container();
//var gameCount;
function instructions(event){
	var background = new createjs.Shape();
	background.graphics.beginFill("#b2b2b2").drawRect(0,0,300,500);
	tempContainer.addChild(background);
	var okayButton = new createjs.Shape();
	okayButton.graphics.beginFill("orange").drawRect(100,400,50,50);
	okayButton.addEventListener("click", unPause);
	tempContainer.addChild(okayButton);
	//var newTicker = createjs.Ticker.addEventListener("tick", promptTicker);
	//createjs.Ticker.setInterval(1000);
	
	games[nextChallenge]();
	stage.addChild(tempContainer);
	stage.update();
	//Sets up the background
	/*var background = new createjs.Shape();
	background.graphics.beginFill("#b2b2b2").drawRect(0,0,300,500);
	tempContainer.addChild(background);*/
	
		
}
	
	
	//Instructions for the first game
	function game0Tips(){
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,200,150,30);
		tempContainer.addChild(middleBox);
		
		var instructionText = new createjs.Text("Touch the correct\ncolour of the word \nand not what the \nword says before\nthe timer runs out", "20px Verdana", "white");
		instructionText.x = 60;
		instructionText.y = 110;
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}
	
	//Instructions for the second game
	function game1Tips() {
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,200,150,30);
		tempContainer.addChild(middleBox);
		
		var instructionText = new createjs.Text("Tap on the balls \nin descending \norder", "20px Verdana", "white");
		instructionText.x = 60;
		instructionText.y = 120;
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}
	
	//Instructions for the third game
	function game2Tips() {
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,200,100,30);
		tempContainer.addChild(middleBox);
		
		var instructionText = new createjs.Text("Tap on the proper \nside of the arrow", "20px Verdana", "white");
		instructionText.x = 60;
		instructionText.y = 120;
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}
	
	//Instructions for the fourth game
	function game3Tips() {
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,210,150,30);
		tempContainer.addChild(middleBox);
		
		var instructionText = new createjs.Text("Avoid the obstacles \nuntil the timer runs \nout to continue", "20px Verdana", "white");
		instructionText.x = 57;
		instructionText.y = 120;
		tempContainer.addChild(instructionText);
		//tempContainer.update();	
	}


function unPause(){
			stage.removeChild(tempContainer);			
			createjs.Ticker.addEventListener("tick", handleTick);
			switch(nextChallenge){
				case 0: 
					gameOne(difficulty);
					break;
				case 1:
					gameTwo(difficulty);
					break;
				case 2: 
					gameThree(difficulty);				
					break;
				case 3:
					gameBoss(difficulty);
					break;
					
				default:
					gameOne(difficulty);
					break;			
				
			}
}