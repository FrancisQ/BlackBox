var oLeft = new createjs.Bitmap("../img/oLeft.png");
var oRight = new createjs.Bitmap("../img/oRight.png");

var bRight = new createjs.Bitmap("../img/bRight.png");
var bLeft = new createjs.Bitmap("../img/bLeft.png");

var gLeft = new createjs.Bitmap("../img/gLeft.png");
var gRight = new createjs.Bitmap("../img/gRight.png");

var boxY = (canvasY-40) /3;
var boxX = canvasW /2;

var arrRX = 375 * .5;
var arrRY = 277 * .5;
var boxBA = 1;
var boxBAB = .01;

var topBarY = 40;
var answered = 0;
var TopAnswer;
var midAnswer;
var btmAnswer;
		
var firstAnswer = true;
var secAnswer  = true;
var thirdAnswer  = true;

var num;
var num2;		
var num3;

var arrows = [pointRight, pointLeft];
var arrows2 = [pointRight2, pointLeft2];
var arrows3 = [pointRight3, pointLeft3];
var answer = ["right", "left"];
var answer1 = ["right", "left"];
var answer2 = ["right", "left"];

// Answer Indicator 
var topLeft;
var topRight;
var midLeft;
var midRight;
var btmLeft;
var btmRight;

// buttons
var topLeftB;
var topRightB;
var midLeftB;
var midRightB;
var btmLeftB;
var btmRightB;

function arrowGame() {
	// arrow image styling
	oLeft.scaleX = oLeft.scaleY = imgScale;
	oLeft.regX = arrRX;
	oLeft.regY = arrRY;
	oLeft.x = cCenter;
	oLeft.y = 125;
	
	oRight.scaleX = oRight.scaleY = imgScale;
	oRight.regX = arrRX;
	oRight.regY = arrRY;
	oRight.x = cCenter;
	oRight.y = 125;
	
	
	bRight.scaleX = bRight.scaleY = imgScale;
	bRight.regX = arrRX;
	bRight.regY = arrRY;
	bRight.x = cCenter;
	bRight.y = 125 + boxY;
	
	bLeft.scaleX = bLeft.scaleY = imgScale;
	bLeft.regX = arrRX;
	bLeft.regY = arrRY;
	bLeft.x = cCenter;
	bLeft.y = 125 + boxY;
	
	gLeft.scaleX = gLeft.scaleY = imgScale;
	gLeft.regX = arrRX;
	gLeft.regY = arrRY;
	gLeft.x = cCenter +3;
	gLeft.y = 125 + boxY * 2;
	
	gRight.scaleX = gRight.scaleY = imgScale;
	gRight.regX = arrRX;
	gRight.regY = arrRY;
	gRight.x = cCenter + 3;
	gRight.y = 125 + boxY * 2;
	
	
	
	
	var background = new createjs.Shape();
	background.graphics.beginFill("#3c3c3c").drawRect(0,0,canvasW,canvasY);
	stage.addChild(background);

	//Top left
	topLeft = new createjs.Shape();
	topLeft.graphics.beginStroke("#505050");
	topLeft.graphics.setStrokeStyle(1); // 2 pixel
	topLeft.graphics.beginFill("#3c3c3c").drawRect(0,topBarY,boxX,boxY);
	/* topLeft.addEventListener("click", checkFirstLeft); */
	topLeft.alpha = boxBA;
	stage.addChild(topLeft);
	
	//top Right
	topRight = new createjs.Shape();
	topRight.graphics.beginStroke("#505050");
	topRight.graphics.setStrokeStyle(1); // 2 pixel
	topRight.graphics.beginFill("#3c3c3c").drawRect(cCenter,topBarY,boxX,boxY);
	topRight.alpha = boxBA;
	stage.addChild(topRight);
/* 	topRight.addEventListener("click", checkFirstRight); */
	stage.update();
	
	//mid left
	midLeft = new createjs.Shape();
	midLeft.graphics.beginStroke("#505050");
	midLeft.graphics.setStrokeStyle(1); // 2 pixel
	midLeft.graphics.beginFill("#3c3c3c").drawRect(0,boxY + topBarY,boxX,boxY);
	/* midLeft.addEventListener("click", checkSecLeft); */
	midLeft.alpha = boxBA;
	stage.addChild(midLeft);
	
	//mid Right
	midRight = new createjs.Shape();
	midRight.graphics.beginStroke("#505050");
	midRight.graphics.setStrokeStyle(1); // 2 pixel
	midRight.graphics.beginFill("#3c3c3c").drawRect(cCenter,boxY  + topBarY,boxX,boxY);
	/* midRight.addEventListener("click", checkSecRight); */
	midRight.alpha = boxBA;
	stage.addChild(midRight);
	
	stage.update();
	
	//bottom left
	btmLeft = new createjs.Shape();
	btmLeft.graphics.beginStroke("#505050");
	btmLeft.graphics.setStrokeStyle(1); // 2 pixel
	btmLeft.graphics.beginFill("#3c3c3c").drawRect(0,boxY * 2  + topBarY,boxX,boxY);
	/* btmLeft.addEventListener("click", checkBtmLeft); */
	btmLeft.alpha = boxBA;
	stage.addChild(btmLeft);
	stage.update();
	
	//bottom Right
	btmRight = new createjs.Shape();
	btmRight.graphics.beginStroke("#505050");
	btmRight.graphics.setStrokeStyle(1); // 2 pixel
	btmRight.graphics.beginFill("#3c3c3c").drawRect(cCenter,boxY * 2  + topBarY,boxX,boxY);
	/* btmRight.addEventListener("click", checkBtmRight); */
	btmRight.alpha = boxBA;
	stage.addChild(btmRight);
	stage.update();
	
	
	// BUTTONTS ~~!!
	//Top left
	topLeftB = new createjs.Shape();
	topLeftB.graphics.beginStroke("#505050");
	topLeftB.graphics.setStrokeStyle(1); // 2 pixel
	topLeftB.graphics.beginFill("#3c3c3c").drawRect(0,topBarY,boxX,boxY);
	topLeftB.addEventListener("click", checkFirstLeft);
	topLeftB.alpha = boxBAB;

	
	//top Right
	topRightB = new createjs.Shape();
	topRightB.graphics.beginStroke("#505050");
	topRightB.graphics.setStrokeStyle(1); // 2 pixel
	topRightB.graphics.beginFill("#3c3c3c").drawRect(cCenter,topBarY,boxX,boxY);
	topRightB.alpha = boxBAB;

	topRightB.addEventListener("click", checkFirstRight);
	stage.update();
	
	//mid left
	midLeftB = new createjs.Shape();
	midLeftB.graphics.beginStroke("#505050");
	midLeftB.graphics.setStrokeStyle(1); // 2 pixel
	midLeftB.graphics.beginFill("#3c3c3c").drawRect(0,boxY + topBarY,boxX,boxY);
	midLeftB.addEventListener("click", checkSecLeft);
	midLeftB.alpha = boxBAB;

	
	//mid Right
	midRightB = new createjs.Shape();
	midRightB.graphics.beginStroke("#505050");
	midRightB.graphics.setStrokeStyle(1); // 2 pixel
	midRightB.graphics.beginFill("#3c3c3c").drawRect(cCenter,boxY  + topBarY,boxX,boxY);
	midRightB.addEventListener("click", checkSecRight);
	midRightB.alpha = boxBAB;

	
	stage.update();
	
	//bottom left
	btmLeftB = new createjs.Shape();
	btmLeftB.graphics.beginStroke("#505050");
	btmLeftB.graphics.setStrokeStyle(1); // 2 pixel
	btmLeftB.graphics.beginFill("#3c3c3c").drawRect(0,boxY * 2  + topBarY,boxX,boxY);
	btmLeftB.addEventListener("click", checkBtmLeft);
	btmLeftB.alpha = boxBAB;

	stage.update();
	
	//bottom Right
	btmRightB = new createjs.Shape();
	btmRightB.graphics.beginStroke("#505050");
	btmRightB.graphics.setStrokeStyle(1); // 2 pixel
	btmRightB.graphics.beginFill("#3c3c3c").drawRect(cCenter,boxY * 2  + topBarY,boxX,boxY);
	btmRightB.addEventListener("click", checkBtmRight);
	btmRightB.alpha = boxBAB;

	stage.update();

	/* 	arrow1 = left
		arrow2 = right*/
		
		num = Math.floor(Math.random()*2);
		num2 = Math.floor(Math.random()*2);
		num3 = Math.floor(Math.random()*2);

		
		
		arrows[num]();
		arrows2[num2]();
		arrows3[num3]();
		
		stage.addChild(topLeftB);
		stage.addChild(topRightB);
		stage.addChild(midLeftB);
		stage.addChild(midRightB);
		stage.addChild(btmLeftB);
		stage.addChild(btmRightB);
		
		
		stage.update();
	

}

function pointLeft(){

stage.addChild(oLeft);
stage.update();
}

function pointLeft2(){
	
stage.addChild(bLeft);
stage.update();

}

function pointLeft3(){

stage.addChild(gLeft);
stage.update();
}

function pointRight(){

stage.addChild(oRight);
stage.update();
}

function pointRight2(){
	
stage.addChild(bRight);
stage.update();
}

function pointRight3(){
	
stage.addChild(gRight);
stage.update();
}

	
function checkFirstRight(){
	topAnswer = "right";
	answered++;
	checkFirstAnswer();
}
function checkFirstLeft(){
	topAnswer = "left";
	answered++;
	checkFirstAnswer();
}
function checkFirstAnswer(){
	
	if(topAnswer == answer[num]){
		boxBA = 1;
		topLeft.graphics.beginFill("#357722").drawRect(0,topBarY,boxX,boxY);
		topRight.graphics.beginFill("#357722").drawRect(cCenter,topBarY,boxX,boxY);
		firstAnswer = true;
		stage.update();
	}
	else{
		boxBA = 1;
		topLeft.graphics.beginFill("#772222").drawRect(0,topBarY,boxX,boxY);
		topRight.graphics.beginFill("#772222").drawRect(cCenter,topBarY,boxX,boxY);
		firstAnswer = false;
		stage.update();
		}
	
	if(answered == 3){
		finished();
	}
	checkIfOneWrong();
}


//Middle Answer Check
function checkSecRight(){
	midAnswer = "right";
	answered++;
	checkSecAnswer();
}
function checkSecLeft(){
	midAnswer = "left";
	answered++;
	checkSecAnswer();
}
function checkSecAnswer(){

	if(midAnswer == answer[num2]){
		boxBA = 1;
		midLeft.graphics.beginFill("#357722").drawRect(0,boxY  + topBarY,boxX,boxY);
		midRight.graphics.beginFill("#357722").drawRect(cCenter,boxY  + topBarY,boxX,boxY);
		secAnswer = true;
		stage.update();
	}
	else{
		boxBA = 1;
		midLeft.graphics.beginFill("#772222").drawRect(0,boxY  + topBarY,boxX,boxY);
		midRight.graphics.beginFill("#772222").drawRect(cCenter,boxY  + topBarY,boxX,boxY);
		secAnswer = false;
		stage.update();
		}
	if(answered == 3){
		finished();
	}
	checkIfOneWrong();
}

//Middle Answer Check
function checkBtmRight(){
	btmAnswer = "right";
	answered++;
	checkBtmAnswer();
}
function checkBtmLeft(){
	btmAnswer = "left";
	answered++;
	checkBtmAnswer();
}
function checkBtmAnswer(){
	
	if(btmAnswer == answer[num3]){
		boxBA = 1;
		btmLeft.graphics.beginFill("#357722").drawRect(0,boxY * 2 + topBarY,boxX,boxY);
		btmRight.graphics.beginFill("#357722").drawRect(cCenter,boxY * 2 + topBarY,boxX,boxY);
		thirdAnswer = true;
		stage.update();
	}
	else{
		boxBA = 1;
		btmLeft.graphics.beginFill("#772222").drawRect(0,boxY * 2 + topBarY,boxX,boxY);
		btmRight.graphics.beginFill("#772222").drawRect(cCenter,boxY * 2 + topBarY,boxX,boxY);
		thirdAnswer = false;
		stage.update();
		}
	if(answered == 3){
		finished();
	}
	checkIfOneWrong();
}
function finished(){
	if((firstAnswer && secAnswer && thirdAnswer)== true){
		alert("good job!");
		nextGame();
		getScore();
	}
	/* else if((firstAnswer && secAnswer && thirdAnswer)== false){
		alert("you suck");
	} */
}

function checkIfOneWrong(){
	
	if(secAnswer == false){
		alert("wronggg Already");
		nextGame();
		loseLife();
	} else if (firstAnswer == false ) {
		alert("wronggg Already");
		nextGame();
		loseLife();
	} else if ( thirdAnswer == false) {
		alert("wronggg Already");
		nextGame();
		loseLife();
	}
	
}