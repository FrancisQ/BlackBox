function instructions(event){
	
	//Sets up the background
	var background = new createjs.Shape();
	background.graphics.beginFill("#b2b2b2").drawRect(0,0,300,500);
	stage.addChild(background);
	
	switch(nextChallenge){
	case 0: 
		gameOneTips();
		
		break;
	
	case 1:
		gameTwoTips();
		
		break;
	
	case 2:
		gameThreeTips();
	
		break;
	
	case 3:
		gameFourTips();
		
		break;
	
	default:
		gameOneTips();
	
		break;
}
	
	
	//Instructions for the first game
	function gameOneTips(){
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,200,150,30);
		stage.addChild(middleBox);
		
		var instructionText = new createjs.Text("Touch the correct\ncolour of the word \nand not what the \nword says before\nthe timer runs out", "20px Verdana", "white");
		instructionText.x = 60;
		instructionText.y = 110;
		stage.addChild(instructionText);
		stage.update();	
	}
	
	//Instructions for the second game
	function gameTwoTips() {
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,200,150,30);
		stage.addChild(middleBox);
		
		var instructionText = new createjs.Text("Tap on the balls \nin descending \norder", "20px Verdana", "white");
		instructionText.x = 60;
		instructionText.y = 120;
		stage.addChild(instructionText);
		stage.update();	
	}
	
	//Instructions for the third game
	function gameThreeTips() {
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,200,100,30);
		stage.addChild(middleBox);
		
		var instructionText = new createjs.Text("Tap on the proper \nside of the arrow", "20px Verdana", "white");
		instructionText.x = 60;
		instructionText.y = 120;
		stage.addChild(instructionText);
		stage.update();	
	}
	
	//Instructions for the fourth game
	function gameFourTips() {
		var middleBox = new createjs.Shape();
		middleBox.graphics.beginFill("purple").drawRoundRect(50,100,210,150,30);
		stage.addChild(middleBox);
		
		var instructionText = new createjs.Text("Avoid the obstacles \nuntil the timer runs \nout to continue", "20px Verdana", "white");
		instructionText.x = 57;
		instructionText.y = 120;
		stage.addChild(instructionText);
		stage.update();	
	}
	
}