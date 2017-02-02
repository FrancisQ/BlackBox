//Pick a random game
var achieveOne2 = false;
var achieveTwo2 = false;
var achieveThree2 = false;
function nextGame(event) {
			stage.removeAllChildren();
			leadAudio.play();

      //variables
      var game = new createjs.Shape();
			var games = [game1(), ballGame(), arrowGame()];
      var randNum = Math.floor(Math.random()*3);
      var endButton = new createjs.Shape();

      if (lives > 0) {

				if(complete == bossInc){
					nextChallenge = 3;
					complete = 0;
					difficulty++;
					bossInc += 3;
					if(firstTime){
            achievementThree();
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
						count = countReset;
						/* games[nextChallenge](); */
						games[randNum]();
					}
				}
      }
			else{
			    stage.removeAllEventListeners();
  				createjs.Ticker.removeEventListener("tick", handleTick);
  				stage.removeAllChildren();
  				endGame2(currentScore, achieveOne2, achieveTwo2, achieveThree2);
			}
 }

function gameBoss(){
	game1();
}


//-----------------ACHIEVEMENTS-------------------------------
function achievementOne() {
    achieveOne2 = true;
    alert("Achievement Get: First Blood");
}

function achievementTwo() {
    achieveTwo2 = true;
    alert("Achievement Get: Reality Hurts");
}

function achievementThree() {
    achieveThree2 = true;
    alert("Achievement Get: Three's");
}
