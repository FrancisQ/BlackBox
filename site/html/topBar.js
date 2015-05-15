function topBar(event){
	 count = 30;
	 
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
				stage.addChild(timerText);
				stage.addChild(gameHeader);
				pauseButton();
				life1();
				life2();
				life3();
				score();
				stage.update();
		}
		
		//Things that change go in here!!
	  if (!event.paused) {
	   
			
			
			count = count-1;
			stage.addChild(timerText);	
			stage.update();
			if (count == 27){
					stage.removeChild(timerText);
					createjs.Ticker.removeEventListener("tick", handleTick);
					loseLife();
					nextGame();
				}
	   
	   }

	stage.update();

}// ticker end