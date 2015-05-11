		//Pick a random game
		var gamesPlayed = 0;
		function nextGame(){
			
				if(gamesPlayed<3){
						var pickaGame = Math.floor(Math.random() * 3);
						
						switch(pickaGame){
								case 0:
								fakeGame1();
								gamesPlayed = gamesPlayed+1;
								break;
								case 1:
								fakeGame2();
								gamesPlayed = gamesPlayed+1;
								break;
								case 2:
								fakeGame1();
								gamesPlayed = gamesPlayed+1;
								break;
								default:
								fakeGame2();
								gamesPlayed = gamesPlayed+1;
								
								}
					}
				if (gamesPlayed==3){
							mainMenu();
							gamesPlayed = 0;
						}
						stage.update();
						
						
				}	
		
		//placeholder games
		function fakeGame1(){
		var backdrop = new createjs.Shape();
		backdrop.graphics.beginFill("blue").drawRect(0,0,300,500);
		stage.addChild(backdrop);
		
		
		
		var playButton = new createjs.Shape();
		playButton.graphics.beginFill("yellow");
		playButton.graphics.moveTo(150, 250).lineTo(300, 175).lineTo(300, 500).lineTo(150, 500).lineTo(150,250);
		stage.addChild(playButton);
		playButton.addEventListener("click",nextGame);
		stage.update();
		}
		
				function fakeGame2(){
		var backdrop = new createjs.Shape();
	backdrop.graphics.beginFill("red").drawRect(0,0,300,500);
	stage.addChild(backdrop);
	
	
			var playButton = new createjs.Shape();
		playButton.graphics.beginFill("yellow");
		playButton.graphics.moveTo(150, 250).lineTo(300, 175).lineTo(300, 500).lineTo(150, 500).lineTo(150,250);
		stage.addChild(playButton);
		playButton.addEventListener("click",nextGame);
		
		stage.update();
		}
		
		
		
		

		