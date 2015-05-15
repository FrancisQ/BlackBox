		//Leaderboards page if clicked on main menu
		function gotoLeaderBoard(event) {	
			var leaderBoard = new createjs.Shape();
			var title = new createjs.Text("Leaderboards", "30px Verdana", "white");
			var scoreBox =  new createjs.Shape();
			var returnButton = new createjs.Shape();
			leaderBoard.graphics.beginFill("blue").drawRect(0,0,300,500);
			leaderBoard.x = 0;
			leaderBoard.y = 0;				
			
			title.x = 50;
			title.y = 55;
			
			scoreBox.graphics.beginFill("black").drawRoundRect(0,0,250,420, 25);
			scoreBox.x = 25;
			scoreBox.y = 100;
			
			returnButton.graphics.beginFill("red").drawRoundRect(275, 5, 25, 25, 5);
			returnButton.addEventListener("click", mainMenu);
			stage.addChild(leaderBoard);
			stage.addChild(title);
			stage.addChild(scoreBox);
			stage.addChild(returnButton);
			stage.update();
		}