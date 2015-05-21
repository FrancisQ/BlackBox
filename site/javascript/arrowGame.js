var oLeft = new createjs.Bitmap("../img/oLeft.png");
var oRight = new createjs.Bitmap("../img/oRight.png");

var bRight = new createjs.Bitmap("../img/bRight.png");
var bLeft = new createjs.Bitmap("../img/bLeft.png");

var gLeft = new createjs.Bitmap("../img/gLeft.png");
var gRight = new createjs.Bitmap("../img/gRight.png");

function arrowGame() {
	// arrow image styling
	oLeft.scaleX = oLeft.scaleY = imgScale;
	oRight.scaleX = oRight.scaleY = imgScale;
	
	
	
	bRight.scaleX = bRight.scaleY = imgScale;
	bLeft.scaleX = bLeft.scaleY = imgScale;
	
	gLeft.scaleX = gLeft.scaleY = imgScale;
	gRight.scaleX = gRight.scaleY = imgScale;
	
	
	
	
	var background = new createjs.Shape();
	background.graphics.beginFill("#3c3c3c").drawRect(0,0,canvasW,canvasY);
	stage.addChild(background);

	//Top left
	var topLeft = new createjs.Shape();
	topLeft.graphics.beginStroke("gray");
	topLeft.graphics.setStrokeStyle(2); // 2 pixel
	topLeft.graphics.beginFill("#3c3c3c").drawRect(0,0,cCenter,166);
	topLeft.addEventListener("click", checkFirstLeft);
	stage.addChild(topLeft);
	//top Right
	var topRight = new createjs.Shape();
	topRight.graphics.beginStroke("gray");
	topRight.graphics.setStrokeStyle(2); // 2 pixel
	topRight.graphics.beginFill("#3c3c3c").drawRect(150,0,150,166);
	stage.addChild(topRight);
	topRight.addEventListener("click", checkFirstRight);
	stage.update();
	//mid left
	var midLeft = new createjs.Shape();
	midLeft.graphics.beginStroke("gray");
	midLeft.graphics.setStrokeStyle(2); // 2 pixel
	midLeft.graphics.beginFill("#3c3c3c").drawRect(0,166,150,166);
	midLeft.addEventListener("click", checkSecLeft);
	stage.addChild(midLeft);
	//mid Right
	var midRight = new createjs.Shape();
	midRight.graphics.beginStroke("gray");
	midRight.graphics.setStrokeStyle(2); // 2 pixel
	midRight.graphics.beginFill("#3c3c3c").drawRect(150,166,150,166);
	midRight.addEventListener("click", checkSecRight);
	stage.addChild(midRight);
	stage.update();
	//bottom left
	var btmLeft = new createjs.Shape();
	btmLeft.graphics.beginStroke("gray");
	btmLeft.graphics.setStrokeStyle(2); // 2 pixel
	btmLeft.graphics.beginFill("#3c3c3c").drawRect(0,332,150,166);
	btmLeft.addEventListener("click", checkBtmLeft);
	stage.addChild(btmLeft);
	//bottom Right
	var btmRight = new createjs.Shape();
	btmRight.graphics.beginStroke("gray");
	btmRight.graphics.setStrokeStyle(2); // 2 pixel
	btmRight.graphics.beginFill("#3c3c3c").drawRect(150,332,150,166);
	btmRight.addEventListener("click", checkBtmRight);
	stage.addChild(btmRight);
	stage.update();

	/* 	arrow1 = left
		arrow2 = right*/
		var TopAnswer;
		var midAnswer;
		var btmAnswer;
		
		var firstAnswer;
		var secAnswer;
		var thirdAnswer;
		
		/* var arrows = [pointRight, pointLeft];
		var arrows2 = [pointRight2, pointLeft2];
		var arrows3 = [pointRight3, pointLeft3];
		var answer = ["right", "left"];
		var answer1 = ["right", "left"];
		var answer2 = ["right", "left"];
		var num = Math.floor(Math.random()*2);
		var num2 = Math.floor(Math.random()*2);
		var num3 = Math.floor(Math.random()*2);
		var answered = 0;
		
		arrows[num]();
		arrows2[num2]();
		arrows3[num3](); */
		stage.addChild(oRight);
	

}

function pointLeft(){
var pointLeft= new createjs.Shape();
pointLeft.graphics.beginFill("blue");
pointLeft.graphics.beginStroke("orange");
pointLeft.graphics.setStrokeStyle(2); // 2 pixel
pointLeft.graphics.moveTo(125,75).lineTo(250, 75).lineTo(250,100).lineTo(125,100).lineTo(125,150).lineTo(75,85).lineTo(125,25).lineTo(125,75);
stage.addChild(pointLeft);
stage.update();
}
function pointLeft2(){
var pointLeft2= new createjs.Shape();
pointLeft2.graphics.beginFill("blue");
pointLeft2.graphics.beginStroke("orange");
pointLeft2.graphics.setStrokeStyle(2); // 2 pixel
pointLeft2.graphics.moveTo(125,225).lineTo(250, 225).lineTo(250,250).lineTo(125,250).lineTo(125,300).lineTo(75,235).lineTo(125,175).lineTo(125,225);
stage.addChild(pointLeft2);
stage.update();
}
function pointLeft3(){
var pointLeft3= new createjs.Shape();
pointLeft3.graphics.beginFill("blue");
pointLeft3.graphics.beginStroke("orange");
pointLeft3.graphics.setStrokeStyle(2); // 2 pixel
pointLeft3.graphics.moveTo(125,400).lineTo(250, 400).lineTo(250,425).lineTo(125,425).lineTo(125,475).lineTo(75,415).lineTo(125,350).lineTo(125,400);
stage.addChild(pointLeft3);
stage.update();
}
function pointRight(){
var pointRight = new createjs.Shape();
pointRight.graphics.beginFill("blue");
pointRight.graphics.beginStroke("orange");
pointRight.graphics.setStrokeStyle(2); // 2 pixel
pointRight.graphics.moveTo(50,75).lineTo(175, 75).lineTo(175, 25).lineTo(225, 85).lineTo(175,150).lineTo(175,100).lineTo(50,100).lineTo(50,75);
stage.addChild(pointRight);
stage.update();
}
function pointRight2(){
var pointRight2 = new createjs.Shape();
pointRight2.graphics.beginFill("blue");
pointRight2.graphics.beginStroke("orange");
pointRight2.graphics.setStrokeStyle(2); // 2 pixel
pointRight2.graphics.moveTo(50,250).lineTo(175, 250).lineTo(175, 200).lineTo(225, 255).lineTo(175,325).lineTo(175,275).lineTo(50,275).lineTo(50,250);
stage.addChild(pointRight2);
stage.update();
}
function pointRight3(){
var pointRight3 = new createjs.Shape();
pointRight3.graphics.beginFill("blue");
pointRight3.graphics.beginStroke("orange");
pointRight3.graphics.setStrokeStyle(2); // 2 pixel
pointRight3.graphics.moveTo(50,400).lineTo(175, 400).lineTo(175, 350).lineTo(225, 405).lineTo(175,475).lineTo(175,425).lineTo(50,425).lineTo(50,400);
stage.addChild(pointRight3);
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
		topLeft.graphics.beginFill("green").drawRect(0,0,150,166);
		topRight.graphics.beginFill("green").drawRect(150,0,150,166);
		firstAnswer = true;
		stage.update();
	}
	else{
		topLeft.graphics.beginFill("red").drawRect(0,0,150,166);
		topRight.graphics.beginFill("red").drawRect(150,0,150,166);
		firstAnswer = false;
		stage.update();
		}
	
	if(answered == 3){
		finished();
	}
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
		midLeft.graphics.beginFill("green").drawRect(0,166,150,166);
		midRight.graphics.beginFill("green").drawRect(150,166,150,166);
		secAnswer = true;
		stage.update();
	}
	else{
		midLeft.graphics.beginFill("red").drawRect(0,166,150,166);
		midRight.graphics.beginFill("red").drawRect(150,166,150,166);
		secAnswer = false;
		stage.update();
		}
	if(answered == 3){
		finished();
	}
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
		btmLeft.graphics.beginFill("green").drawRect(0,332,150,166);
		btmRight.graphics.beginFill("green").drawRect(150,332,150,166);
		thirdAnswer = true;
		stage.update();
	}
	else{
		btmLeft.graphics.beginFill("red").drawRect(0,332,150,166);
		btmRight.graphics.beginFill("red").drawRect(150,332,150,166);
		thirdAnswer = false;
		stage.update();
		}
	if(answered == 3){
		finished();
	}
}
function finished(){
	if((firstAnswer && secAnswer && thirdAnswer)== true){
		alert("good job!");
	}
	else if((firstAnswer && secAnswer && thirdAnswer)== false){
		alert("you suck");
	}
}