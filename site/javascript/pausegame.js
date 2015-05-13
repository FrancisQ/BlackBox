var stage;

var headerb = new createjs.Bitmap("../img/MenuHead.png");
var retry = new createjs.Bitmap("../img/retry.png");
var menu = new createjs.Bitmap("../img/menu.png");
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
function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	pause();
	
	
	
}

function pause() {

	
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
	menu.scaleY = menu.scaleX = imgScale;
	
	menu.y = retry.y - (168 * imgScale);
	
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
	stage.addChild(BG);
	
	stage.addChild(headerb);
	stage.addChild(resume);
	stage.addChild(retry);
	stage.addChild(menu);
	stage.addChild(highScoreBar);
	stage.addChild(highScoreInBar);
	stage.addChild(highScoreTxt);
	stage.addChild(highScoreTxtUser);

	
	
	/* Functionality */
	menu.addEventListener("click",menuP);
	retry.addEventListener("click", retryP);
	resume.addEventListener("click", resumeP);
	
	stage.update();

}


/* removes the endgame page from canvas - Turns OFF*/
function removePause() {
	stage.removeChild(BG);
	stage.removeChild(headerb);
	stage.removeChild(resume);
	stage.removeChild(retry);
	stage.removeChild(menu);
	stage.removeChild(highScoreBar);
	stage.removeChild(highScoreInBar);
	stage.removeChild(highScoreTxt);
	stage.removeChild(highScoreTxtUser);

	
	stage.update();
}

function menuP(event) {
	removePause();
	alert("you Pressed menu");
}

function resumeP(event) {
	removePause();
	alert("you Pressed resume");
}

function retryP(event) {
	removePause();
	alert("you Pressed retry");
}