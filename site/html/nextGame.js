		//Pick a random game
		
 function nextGame(event) {
             //variables
             var game = new createjs.Shape();
			var games = [gameOne, gameTwo, gameThree, gameBoss];
             var randNum = Math.floor(Math.random()*3 )
             var endButton = new createjs.Shape();



            if (lives > 0) {
				if(complete == 3){
					complete = 0;
					difficulty++;
					gameBoss();
					
				}
					
				else{
				games[randNum](difficulty);
				}
            }
			
			else{
				gameOver();

             function gameOver(){
             gameOver = new createjs.Text("LOVE IS OVER!", "30px Verdana", "black");
             gameOver.x = 50;
             gameOver.y = 50;
             stage.removeAllChildren();
             var home = new createjs.Shape();
			 home.graphics.beginFill("red").drawRect(150,250, 100, 50);
			 home.addEventListener("click", init);
			 stage.addChild(home);
			 stage.addChild(gameOver);
             stage.update();
			 lives = 3;
			 difficulty=1;
			 complete = 0;
         }

         function gameOne(difficulty) {
			 topBar();
			var backdrop = new createjs.Shape();
		backdrop.graphics.beginFill("blue").drawRect(0,0,300,500);
		stage.addChild(backdrop);
             
		complete++;
		stage.update();
         }

         function gameTwo(difficulty) {
			 topBar();
			var backdrop = new createjs.Shape();
		backdrop.graphics.beginFill("red ").drawRect(0,0,300,500);
		stage.addChild(backdrop);
		

		complete++;
		stage.update();
            
         }

         function gameThree(difficulty) {
			 topBar();
			var backdrop = new createjs.Shape();
		backdrop.graphics.beginFill("green").drawRect(0,0,300,500);
		stage.addChild(backdrop);
		

		complete++;
		stage.update();
            
         }
		 
		 function gameBoss(difficulty){
			 		game1();
					
            
			 
		 }

			}
 }