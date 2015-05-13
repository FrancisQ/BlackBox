var stage;

var headerb = new createjs.Bitmap("../img/MenuHead.png");
var retry = new createjs.Bitmap("../img/retry.png");
var menu = new createjs.Bitmap("../img/menu2.png");

var BG = new createjs.Bitmap("../img/bgGray.png");

var highScoreBar = new createjs.Shape();
var highScoreInBar = new createjs.Shape();
var highScoreTxt = new createjs.Text("HIGHEST SCORE", "25px Arial", "#f5cb37");
var highScoreTxtUser = new createjs.Text("000000", "30px Arial", "#f5cb37");


var retryY = 568 -(305 * .5);
var menuY = retryY - (229 * .5)
var imgScale = .5;

var canvasW = 320;
var canvasY = 568;

var cCenter = canvasW * .5;

function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	headerb.scaleX = imgScale;
	headerb.scaleY = imgScale;
	
	/* gray BG */
	BG.scaleX = BG.scaleY = imgScale;
	
	/* Retry Button */
	retry.scaleY = retry.scaleX = imgScale;
	retry.y = retryY;
	
	/* Menu Button */
	menu.scaleY = menu.scaleX = imgScale;
	
	menu.y =  menuY;
	
	/* Highest Score Bar */
	highScoreBar.graphics.beginFill("#1f1f1f").drawRect(cCenter, retryY - menuY, 225, 75);
	highScoreBar.regY = 75 * .5;
	highScoreBar.regX = 225 * .5;
	
	highScoreInBar.graphics.beginFill("#35687d").drawRect(cCenter, retryY - menuY + 8, 190, 32);
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
	stage.addChild(retry);
	stage.addChild(menu);
	stage.addChild(highScoreBar);
	stage.addChild(highScoreInBar);
	stage.addChild(highScoreTxt);
	stage.addChild(highScoreTxtUser);

		/* Functionality */
	
	menu.addEventListener("click",test, false);
	

	
	
	stage.update();
}

	function test(event) {
		alert("MENU BUTTON BEEN CLICK BOI");
	}