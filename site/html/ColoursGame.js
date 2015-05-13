function game1(event){

//BACKGROUND
	var backdrop = new createjs.Shape();
	backdrop.graphics.beginFill("white").drawRect(0,0,300,500);
	stage.addChild(backdrop);
	topBar();
	

//THIS PART IS FOR THE WORD WITH COLOUR

//random generator
var pick = Math.floor(Math.random() * 9);
var pick2 = Math.floor(Math.random() * 9);
//words array
var colourWords = ["blue", "red", "yellow", "green", "purple", "pink", "orange", "cyan", "black"];
//colour array
var colourColour = ["#0000FF", "#FF0000", "#FFFF00", "#00FF00", "#6B238E", "#FF83FA", "#FF8C00", "#00FFFF", "#000000"];
//Choose a colour
var colourChosen = colourColour[pick];
//Choose WORD
var wordChosen = colourWords[pick2];

						
var text = new createjs.Text(wordChosen, "40px Times New Roman", colourChosen);
text.x = 105;
text.y = 250;
text.textBaseline = "alphabetic";
stage.addChild(text);
stage.update();


//THIS PART IS FOR THE BUTTONS 

var random = Math.floor(Math.random()*9);
var random2 = Math.floor(Math.random()*9);
var random3 = Math.floor(Math.random()*9);
var answer = colourChosen;
var randomColour1 = colourColour[random];
var randomColour2 = colourColour[random2];
var randomColour3 = colourColour[random3];
var colourOfWord = colourColour[pick2]


if(colourOfWord == answer){
	while(colourOfWord == answer){
	random3 = Math.floor(Math.random()*9);
	randomColour3 = colourColour[random3];
	colourOfWord = randomColour3;
	};
 };
 
 //makes sure the first random colour is not duplicated.
if((random== pick) || (random== pick2) || (random == random2) || (random == random3)){
	while((random== pick) || (random== pick2) || (random == random2)|| (random == random3)){
		random = Math.floor(Math.random()*9);
		randomColour1 = colourColour[random];
	}
};
//makes sure the second random colour is not duplicated.
if((random2 == pick) || (random2 == pick2) || (random == random2) || (random2 == random3)){
	while((random2 == pick) || (random2 == pick2) || (random == random2)|| (random2 == random3)){
		random2 = Math.floor(Math.random()*9);
		randomColour2 = colourColour[random2];
	}
	
	
};


//Switch position of right answer
var answerPlacement = Math.floor(Math.random()*4);
switch(answerPlacement){
	case 0: 
		topLeft();
		
		break;
	
	case 1:
		topRight();
		
		break;
	
	case 2:
		bottomLeft();
	
		break;
	
	case 3:
		bottomRight();
		
		break;
	
	default:
		topLeft();
	
		break;
};

//Right Answer
function correct(event){alert("Shit, you got it right!");};
//Wrong Answer
function wrong(event){alert("WRONG");};


//OPTION 1
function bottomLeft(){
	//bottomLeft
		var bottomLeft = new createjs.Shape();
		bottomLeft.graphics.beginFill(answer).drawRect(200,210,300,500);
		bottomLeft.rotation = 45;
		stage.addChild(bottomLeft);
		bottomLeft.addEventListener("click",correct);
		stage.update();
		
		//topLeft
		var topLeft = new createjs.Shape();
		topLeft.graphics.beginFill(randomColour2).drawRect(-150,-150,300,500);
		topLeft.rotation = 45;
		stage.addChild(topLeft);
		topLeft.addEventListener("click", wrong);
		stage.update();

		//topRight
		var topRight = new createjs.Shape();
		topRight.graphics.beginFill(colourOfWord).drawRect(50,-365,500,300);
		topRight.rotation = 45;
		stage.addChild(topRight);
		topRight.addEventListener("click", wrong);
		stage.update();

		
		//bottomRight
		var bottomRight = new createjs.Shape();
		bottomRight.graphics.beginFill(randomColour1).drawRect(420,-25,300,500);
		bottomRight.rotation = 45;
		stage.addChild(bottomRight);
		bottomRight.addEventListener("click", wrong);
		
		stage.update();
		
		
		
};

//OPTION 2
function topLeft(){
		//topLeft
		var topLeft = new createjs.Shape();
		topLeft.graphics.beginFill(answer).drawRect(-150,-150,300,500);
		topLeft.rotation = 45;
		stage.addChild(topLeft);
		topLeft.addEventListener("click",correct);
		stage.update();

		//topRight
		var topRight = new createjs.Shape();
		topRight.graphics.beginFill(colourOfWord).drawRect(50,-365,500,300);
		topRight.rotation = 45;
		stage.addChild(topRight);
		topRight.addEventListener("click", wrong);
		stage.update();

		//bottomLeft
		var bottomLeft = new createjs.Shape();
		bottomLeft.graphics.beginFill(randomColour1).drawRect(200,210,300,500);
		bottomLeft.rotation = 45;
		stage.addChild(bottomLeft);
		bottomLeft.addEventListener("click", wrong);
		stage.update();

		//bottomRight
		var bottomRight = new createjs.Shape();
		bottomRight.graphics.beginFill(randomColour2).drawRect(420,-25,300,500);
		bottomRight.rotation = 45;
		stage.addChild(bottomRight);
		bottomRight.addEventListener("click", wrong);
		
		stage.update();
		
};

//OPTION 3
function topRight(){
		//topLeft
		var topLeft = new createjs.Shape();
		topLeft.graphics.beginFill(colourOfWord).drawRect(-150,-150,300,500);
		topLeft.rotation = 45;
		stage.addChild(topLeft);
		topLeft.addEventListener("click", wrong);
		stage.update();

		//topRight
		var topRight = new createjs.Shape();
		topRight.graphics.beginFill(answer).drawRect(50,-365,500,300);
		topRight.rotation = 45;
		stage.addChild(topRight);
		topRight.addEventListener("click",correct);
		stage.update();

		//bottomLeft
		var bottomLeft = new createjs.Shape();
		bottomLeft.graphics.beginFill(randomColour2).drawRect(200,210,300,500);
		bottomLeft.rotation = 45;
		stage.addChild(bottomLeft);
		bottomLeft.addEventListener("click",wrong);
		stage.update();

		//bottomRight
		var bottomRight = new createjs.Shape();
		bottomRight.graphics.beginFill(randomColour1).drawRect(420,-25,300,500);
		bottomRight.rotation = 45;
		stage.addChild(bottomRight);
		bottomRight.addEventListener("click", wrong);
		
		stage.update();
		

};

//OPTION 4
function bottomRight(){
		//topLeft
		var topLeft = new createjs.Shape();
		topLeft.graphics.beginFill(randomColour1).drawRect(-150,-150,300,500);
		topLeft.rotation = 45;
		stage.addChild(topLeft);
		topLeft.addEventListener("click", wrong);
		stage.update();

		//topRight
		var topRight = new createjs.Shape();
		topRight.graphics.beginFill(colourOfWord).drawRect(50,-365,500,300);
		topRight.rotation = 45;
		stage.addChild(topRight);
		topRight.addEventListener("click", wrong);
		stage.update();

		//bottomLeft
		var bottomLeft = new createjs.Shape();
		bottomLeft.graphics.beginFill(randomColour2).drawRect(200,210,300,500);
		bottomLeft.rotation = 45;
		stage.addChild(bottomLeft);
		bottomLeft.addEventListener("click", wrong);
		stage.update();

		//bottomRight
		var bottomRight = new createjs.Shape();
		bottomRight.graphics.beginFill(answer).drawRect(420,-25,300,500);
		bottomRight.rotation = 45;
		stage.addChild(bottomRight);
		bottomRight.addEventListener("click",correct);
		
		
		
				
			}
		
		stage.update();
		
		
};


