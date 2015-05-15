
	
/* function init(){
stage.removeAllEventListeners();
stage.removeAllChildren();
mainMenu();
menu2();
} */

// Sound temp delete
/* 
function mainMenu(){
	
	//Sound Functionality
	var button1 =  soundButton.addEventListener("click",soundToggle);
	//Sound toggle if clicked on main menu
	function soundToggle(event) {
		if (soundIsOn === true){
			alert("Sound is now set to off!");
		soundIsOn = false;
		}
		else {
			alert("Sound is now set to on!");
		soundIsOn = true;
		}
	}

} */
	
	 


function removeTicker(){
	createjs.Ticker.removeEventListener("tick", handleTick);
}
	
function loseLife(){
	lives--;
}
									
//Score
function getScore(){
	currentScore =+ (count * difficulty);
		return currentScore;
}
			
function score(){
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
