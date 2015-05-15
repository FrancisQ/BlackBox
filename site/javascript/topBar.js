var pauseB = new createjs.Bitmap("../img/pause.png");


function topBar(event){
	 count = 30;
	 

	pauseB.scaleY = pauseB.scaleX = imgScale;
	
	 
	pauseB.regX = 104;
	
	pauseB.x = canvasW;
	pauseB.y = 0;
	
	stage.addChild(pauseB);
	
	pauseB.addEventListener("click", pauseF);
	count = 30;
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
				score();
				stage.update();
		}
		
		//Things that change go in here!!
	  if (!event.paused) {

	   
			
			
			count = count-1;
			stage.addChild(timerText);	
			stage.update();
			if (count == 0){
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
			count--;
	    }
	

	stage.update();

}// ticker end

function pauseF(event) {
	
	removeTicker();
	pause2();
	
}
