var stage;

var leaderbg = new createjs.Bitmap("../img/leaderBG.png");
var contentBox = new createjs.Bitmap("../img/LCont.png");
var bbutton = new createjs.Bitmap("../img/LBck.png");
var lTxt = new createjs.Bitmap("../img/LTxt.png");
var leaderTitle = new createjs.Bitmap("../img/LTitle.png");


var imgScale = .5;

var canvasW = 320;
var canvasY = 568;

var cCenter = canvasW * .5;

var userX = 135;
var rankX = 50;
var scoreX = 220;

var yInc = 30;

/* TEST independent canvas */
function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	leader();
	
	
	
}

function leader() {
	
	// BG
	leaderbg.scaleX = leaderbg.scaleY = imgScale;
	
	// Main Content Box
	contentBox.scaleX = contentBox.scaleY = imgScale;
	contentBox.regX = 536 * .5;
	contentBox.y = canvasY - (679 * imgScale);
	contentBox.x = cCenter;
	
	// Leader Title
	leaderTitle.scaleX = leaderTitle.scaleY = imgScale;
	leaderTitle.regX = 387 * .5;
	leaderTitle.y = 20;
	leaderTitle.x = cCenter;
	
	// Back button
	bbutton.scaleX = bbutton.scaleY = imgScale;
	bbutton.regX = 117;
	bbutton.regY = 112 * .5;
	bbutton.y = 80;
	bbutton.x = canvasW;
	
	// Leader Cont User
	lTxt.scaleX = lTxt.scaleY = imgScale;
	lTxt.regX = 451 * .5;
	lTxt.x = cCenter - 9;
	lTxt.y = 240;
	
	// Leader User ranking
	var r1 = new createjs.Text("1", "12px Arial", "white");
	var user1 = new createjs.Text("USER", "12px Arial", "white");
	var score1 = new createjs.Text("999999", "12px Arial", "white");
	
	r1.x = rankX;
	user1.x = userX;
	user1.textAlign = "center";
	score1.x = scoreX;
	
	r1.y = 280;
	user1.y = r1.y;
	
	score1.y = r1.y;
	
	var r2 = new createjs.Text("2", "12px Arial", "white");
	var user2 = new createjs.Text("2nd USER", "12px Arial", "white");
	var score2 = new createjs.Text("999998", "12px Arial", "white");
	
	r2.x = rankX;
	user2.x = userX;
	user2.textAlign = "center";
	score2.x = scoreX;
	
	r2.y = 280 + yInc;
	user2.y = r2.y;
	
	score2.y = r2.y;
	
	
	/* Adding components to the stage */
	stage.addChild(leaderbg);
	stage.addChild(contentBox);
	stage.addChild(lTxt);
	stage.addChild(leaderTitle);
	stage.addChild(bbutton);
	
	stage.addChild(r1, user1, score1);
	stage.addChild(r2, user2, score2);
	
	/* Functionality */
	bbutton.addEventListener("click", leaderBack);
	
	
	
	stage.update();

}


/* removes the leader page from canvas - Turns OFF*/
function removePause() {
	stage.removeChild(leaderbg);
	stage.removeChild(contentBox);
	stage.removeChild(lTxt);
	stage.removeChild(leaderTitle);
	stage.removeChild(bbutton);
	
	stage.update();
}

function leaderBack(event) {
	removePause();
	alert("going back..");
}