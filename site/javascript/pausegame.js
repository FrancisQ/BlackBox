/* var stage; */
var container = new  createjs.Container();
var headerb = new createjs.Bitmap("../img/MenuHead.png");
var retry = new createjs.Bitmap("../img/retry.png");
var menuB = new createjs.Bitmap("../img/menu.png");
var resume = new createjs.Bitmap("../img/resume.png");

var BG = new createjs.Bitmap("../img/bgGray.png");

var highScoreBar = new createjs.Shape();
var highScoreInBar = new createjs.Shape();
var highScoreTxt = new createjs.Text("HIGHEST SCORE", "25px Arial", "#f5cb37");
var highScoreTxtUser = new createjs.Text("000000", "30px Arial", "#f5cb37");

var imgScale = .5;

var canvasW = 320;
var canvasY = 568;

var cCenter = canvasW * .5;

/* TEST independent canvas */
/* function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	pause();
	
	 
	
} */

function pause2() {

	
	headerb.scaleX = imgScale;
	headerb.scaleY = imgScale;
	
	/* gray BG */
	BG.scaleX = BG.scaleY = imgScale;
	
	
	/* Resume Button */
	resume.scaleY = resume.scaleX = imgScale;
	resume.y = canvasY - (330 * imgScale);
	
	
	
	/* Retry Button */
	retry.scaleY = retry.scaleX = imgScale;
	retry.y = resume.y - ( 305 * imgScale);
	
	/* Menu Button */
	menuB.scaleY = menuB.scaleX = imgScale;
	
	menuB.y = retry.y - (168 * imgScale);
	
	/* Highest Score Bar */
	highScoreBar.graphics.beginFill("#1f1f1f").drawRect(cCenter, 115, 225, 75);
	highScoreBar.regY = 75 * .5;
	highScoreBar.regX = 225 * .5;
	
	highScoreInBar.graphics.beginFill("#35687d").drawRect(cCenter, 122, 190, 32);
	highScoreInBar.regY = 24 * .5;
	highScoreInBar.regX = 190 * .5;
	
	
	highScoreTxt.x = cCenter;
	highScoreTxt.y = 80;
	highScoreTxt.textAlign = "center";
	
	
	highScoreTxtUser.x = cCenter;
	highScoreTxtUser.y = 110;
	highScoreTxtUser.textAlign = "center";
	
	
	/* Adding components to the stage */
	
	container.addChild(BG);
	
	container.addChild(headerb);
	container.addChild(resume);
	container.addChild(retry);
	container.addChild(menuB);
	container.addChild(highScoreBar);
	container.addChild(highScoreInBar);
	container.addChild(highScoreTxt);
	container.addChild(highScoreTxtUser);

	stage.addChild(container);
	
	/* Functionality */
	menuB.addEventListener("click",menuP);
	retry.addEventListener("click", retryP);
	resume.addEventListener("click", resumeP);
	
	stage.update();

}


/* removes the endgame page from canvas - Turns OFF*/
function removePause() {
	/* stage.removeChild(BG);
	stage.removeChild(headerb);
	stage.removeChild(resume);
	stage.removeChild(retry);
	stage.removeChild(menu);
	stage.removeChild(highScoreBar);
	stage.removeChild(highScoreInBar);
	stage.removeChild(highScoreTxt);
	stage.removeChild(highScoreTxtUser);

	
	 */
	
	
	stage.removeChild(container);
	stage.update();
}

function menuP(event) {
	removePause();

	menu2();
	/* alert("going menu.."); */
}

function resumeP(event) {
	removePause();
	createjs.Ticker.addEventListener("tick", handleTick);
	
	/* alert("resuming game.."); */
}

function retryP(event) {
	removePause();
	count = countReset;
	lives = 4;
	difficulty = 1;
	complete = 0;
	currentScore = 0;
	nextGame();
	/* alert("retrying game.."); */
}