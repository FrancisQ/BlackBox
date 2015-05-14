var stage;

var pauseB = new createjs.Bitmap("../img/pause.png");
var life = new createjs.Bitmap("../img/life.png");


var imgScale = .5;
var canvasW = 320;
var canvasY = 568;
var cCenter = canvasW * .5;


/* TEST independent canvas */
function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	gamePan();
}


function gamePan() {
	pauseB.scaleX = pauseB.scaleY = imgScale;
	pauseB.regX = 117;
	pauseB.regY = 112 * .5;
	pauseB.x = canvasW;
	pauseB.y = 80;
	
	
	stage.addChild(pauseB);
	
}