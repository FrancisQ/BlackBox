function ballGame(event){
//Background
var background = new createjs.Shape();
background.graphics.beginFill("black").drawRect(0,0,300,500);
stage.addChild(background);
stage.update();



//circle1
var container1 = new createjs.Container();
var radius1 =  Math.floor(Math.random() * 35 + 20);
var xStart1 =  Math.floor(Math.random() * 240);
var yStart1 =  Math.floor(Math.random() * 440 + 40);
var clicked1 = false;

//shape
 circle1 = new createjs.Shape();
	circle1.graphics.beginStroke("gray");
	circle1.graphics.setStrokeStyle(2); // 2 pixel
	circle1.graphics.beginFill("red").drawCircle(xStart1,yStart1,radius1);
	circle1.setBounds(xStart1,yStart1,radius1);
	container1.addChild(circle1);
//text
var text1 = new createjs.Text("1", "30px Times New Roman", "white");
	text1.x = circle1.x + xStart1 - 10;
	text1.y = circle1.y + yStart1 - 15;
	container1.addChild(text1);
	
	
	stage.addChild(container1);
	container1.addEventListener("click",removeCircle1);
	stage.update();
	
	function removeCircle1(event){
	stage.removeChild(container1);
	clicked1 = true
	answer1();
	stage.update();
}



	
//circle2
var container2 = new createjs.Container();
var radius2 = Math.floor(Math.random() * 35 + 20);
var xStart2 = Math.floor(Math.random() * 240);
var yStart2 =  Math.floor(Math.random() * 440 + 40);
var clicked2 = false;

//shape
circle2 = new createjs.Shape();
	circle2.graphics.beginStroke("gray");
	circle2.graphics.setStrokeStyle(2); // 2 pixel
	circle2.graphics.beginFill("blue").drawCircle(xStart2,yStart2,radius2);
	container2.addChild(circle2);
	stage.addChild(container2);
	container2.addEventListener("click",removeCircle2);
	stage.update();
//text
var text2 = new createjs.Text("2", "30px Times New Roman", "white");
	text2.x = circle2.x + xStart2 - 10;
	text2.y = circle2.y + yStart2 - 15;
	container2.addChild(text2);	
	
	function removeCircle2(event){
	stage.removeChild(container2);
	clicked2 = true;
	
	stage.update();
	}
	
	
	
//circle3
var container3 = new createjs.Container();
var radius3 = Math.floor(Math.random() * 35 + 20);
var xStart3 = Math.floor(Math.random() * 240);
var yStart3 = Math.floor(Math.random() * 440 + 40);
var clicked3 = false;

//shape
circle3 = new createjs.Shape();
	circle3.graphics.beginStroke("gray");
	circle3.graphics.setStrokeStyle(2); // 2 pixel
	circle3.graphics.beginFill("green").drawCircle(xStart3,yStart3,radius3);
	container3.addChild(circle3);
	stage.addChild(container3);
	container3.addEventListener("click",removeCircle3);
	stage.update();
	
//text
var text3 = new createjs.Text("3", "30px Times New Roman", "white");
	text3.x = circle3.x + xStart3 - 10;
	text3.y = circle3.y + yStart3 - 15;
	container3.addChild(text3);
	
	function removeCircle3(event){
	stage.removeChild(container3);
	clicked3 = true
	
	stage.update();
	}




//animation or Ticker
var animate = createjs.Ticker.addEventListener("tick", moveCircle);
	animate.setFPS(20);
	
//#1 direction
var directionX1;
var directionY1;
var directionX2;
var directionY2;
var directionX3;
var directionY3;
if(Math.floor(Math.random()*2 >=1)){
 directionX1 = true;
}
else{
	 directionX1 = false;
	}
if(Math.floor(Math.random()*2 >=1)){
 directionY1 = true;
}
else{
	 directionY1 = false;
	}

//#2 direction
if(Math.floor(Math.random()*2 >=1)){
 directionX2 = true;
}
else{
	 directionX2 = false;
	}
if(Math.floor(Math.random()*2 >=1)){
 directionY2 = true;
}
else{
	 directionY2 = false;
	}
//#3 direction
if(Math.floor(Math.random()*2 >=1)){
directionX3 = true;
}
else{
	 directionX3 = false;
	}
if(Math.floor(Math.random()*2 >=1)){
 directionY3 = true;
}
else{
	 directionY3 = false;
	}


//moves each circle differently	
function moveCircle(event){
var header = 40;
//number 1
	if (directionX1 == true){
		container1.x = container1.x+5; 
		if( container1.x >= (stage.canvas.width - (radius1*1.2) - (xStart1*0.95))){
			directionX1 = false;
		}
	}
	if(directionX1 == false){
		container1.x = container1.x - 5;
		if( container1.x <= (0 - (xStart1*0.95) +  (radius1*0.95))){
			directionX1 = true;
		}
	}
//vertical bounce
	if (directionY1 == true){
		container1.y = container1.y+5; 
		if( container1.y >= (stage.canvas.height - (radius1*1.2)- (yStart1*0.95))){
			directionY1 = false;
		}
	}
	if(directionY1 == false){
		container1.y = container1.y - 5;
		if( container1.y <= (0-(yStart1*0.95)+(radius1*0.95) + header)){
			directionY1 = true;
		}
	}
	stage.update();
	
//number 2
	if (directionX2 == true){
		container2.x = container2.x+5; 
		if( container2.x >= (stage.canvas.width - (radius2*1.2) - (xStart2*0.95))){
			directionX2 = false;
		}
	}
	if(directionX2 == false){
		container2.x = container2.x - 5;
		if( container2.x <= (0 - (xStart2*0.95)+(radius2*0.95))){
			directionX2 = true;
		}
	}
//vertical bounce
	if (directionY2 == true){
		container2.y = container2.y+5; 
		if( container2.y >= (stage.canvas.height - (radius2 * 1.2)- (yStart2*0.95))){
			directionY2 = false;
		}
	}
	if(directionY2 == false){
		container2.y = container2.y - 5;
		if( container2.y <= (0-(yStart2*0.95)+(radius2*0.95) + header)){
			directionY2 = true;
		}
	}
	stage.update();
//number 3
	if (directionX3 == true){
		container3.x = container3.x+5; 
		if( container3.x >= (stage.canvas.width - (radius3*1.2) - (xStart3*0.95))){
			directionX3 = false;
		}
	}
	if(directionX3 == false){
		container3.x = container3.x - 5;
		if( container3.x <= (0 - (xStart3*0.95)+(radius3*0.95))){
			directionX3 = true;
		}
	}
//vertical bounce
	if (directionY3 == true){
		container3.y = container3.y+5; 
		if( container3.y >= (stage.canvas.height - (radius3*1.2)- (yStart3*0.95))){
			directionY3 = false;
		}
	}
	if(directionY3 == false){
		container3.y = container3.y - 5;
		if( container3.y <= (0-(yStart3*0.95)+(radius3*0.95)+ header)){
			directionY3 = true;
		}
	}
	stage.update();
	
	
}



function answer1(event){
	if(clicked3 == true){
		if(clicked2 == true){
		removeCircle1();
		clicked3 = false;
		clicked2 = false;
		clicked1 = false;
		alert("correct");
			correct();
		}
		else{
			clicked3 = false;
			clicked2 = false;
			clicked1 = false;
			alert("wrong");
			wrong();
		}
	}
	else{
			clicked3 = false;
			clicked2 = false;
			clicked1 = false;
			alert("wrong");
			wrong();
		
	}
	
}
function answer2(event){
	if(clicked2 == true){
		if(clicked3==true){
		removeCircle2();
		}
	}
	else{
			clicked3 = false;
			clicked2 = false;
			clicked1 = false;
			alert("wrong");
			wrong();
	}
}

function answer3(event){
	if(clicked3==true){
		if(clicked1 == true || clicked2 == true){
			clicked3 = false;
			clicked2 = false;
			clicked1 = false;
			alert("wrong");
			wrong();
			}
	}
}


stage.update();
}
