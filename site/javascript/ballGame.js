function ballGame(event){
	//Background
	var background = new createjs.Shape();
	background.graphics.beginFill("#3c3c3c").drawRect(0,0,canvasW,canvasY);
	stage.addChild(background);
	
	topBar();

	//circle1
	var container1 = new createjs.Container();
	var radius1 =  Math.floor(Math.random() * 35 + 20);
	var xStart1 =  Math.floor(Math.random() * 240);
	var yStart1 =  Math.floor(Math.random() * 440 + 40);
	var clicked1 = false;

	//shape
	circle1 = new createjs.Shape();
	/* circle1.graphics.beginStroke("gray"); */
	circle1.graphics.setStrokeStyle(2); // 2 pixel
	circle1.graphics.beginFill("#f53737").drawCircle(xStart1,yStart1,radius1);
	circle1.setBounds(xStart1,yStart1,radius1);
	container1.addChild(circle1);
	//text
	var text1 = new createjs.Text("1", "30px Arial", "white");
	text1.x = circle1.x + xStart1 - 10;
	text1.y = circle1.y + yStart1 - 15;
	container1.addChild(text1);


	stage.addChild(container1);
	container1.addEventListener("click",removeCircle1);
	stage.update();
		

	function removeCircle1(event){
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

	//circle2
	var container2 = new createjs.Container();
	var radius2 = Math.floor(Math.random() * 35 + 20);
	var xStart2 = Math.floor(Math.random() * 240);
	var yStart2 =  Math.floor(Math.random() * 440 + 40);
	var clicked2 = false;

	//shape
	circle2 = new createjs.Shape();

	circle2.graphics.setStrokeStyle(2); // 2 pixel
	circle2.graphics.beginFill("#375bf5").drawCircle(xStart2,yStart2,radius2);
	container2.addChild(circle2);
	stage.addChild(container2);
	container2.addEventListener("click",removeCircle2);
	stage.update();
	//text
	var text2 = new createjs.Text("2", "30px Arial", "white");
	text2.x = circle2.x + xStart2 - 10;
	text2.y = circle2.y + yStart2 - 15;
	container2.addChild(text2);	

	function removeCircle2(event){
		clicked2 = true;
		answer2();
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
	/* circle3.graphics.beginStroke("gray");
	circle3.graphics.setStrokeStyle(2); // 2 pixel */
	circle3.graphics.beginFill("#f5c237").drawCircle(xStart3,yStart3,radius3);
	container3.addChild(circle3);
	stage.addChild(container3);
	container3.addEventListener("click",removeCircle3);
	stage.update();

	//text
	var text3 = new createjs.Text("3", "30px Arial", "white");
	text3.x = circle3.x + xStart3 - 10;
	text3.y = circle3.y + yStart3 - 15;
	container3.addChild(text3);

	function removeCircle3(event){	
		clicked3 = true
		answer3();
		stage.update();
	}


	
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


moveCircle();

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


	
	//moves each circle differently	
	function moveCircle(){
	setTimeout(function() {
		requestAnimationFrame(moveCircle);

		var header = 40;
		//number 1
		if (directionX1 == true){
			container1.x = container1.x+5; 
			if( container1.x >= (stage.canvas.width - (radius1*1.2) - (xStart1*0.95))){
				directionX1 = false;
			}
		}
		if(directionX1 == false){
			container1.x = container1.x -5;
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
		}, 1000/25);
		
	}




	function answer1(event){
		if(clicked3 == true){
			if(clicked2 == true){
				/* alert("correct 1st ball last"); */
				stage.removeChild(container1);
				stage.removeAllChildren();
				stage.update();
				nextGame();
				getScore();
			}
			else{
				clicked1 = false;
				/* alert("2nd ball not touched - 1st ball bad"); */
				stage.removeAllChildren();
				stage.update();
				loseLife();
				nextGame();
			}
		}
		else{
				clicked1 = false;
				/* alert("3rd ball not touched -1st ball bad"); */
				stage.removeAllChildren();
				stage.update();
				loseLife();
				nextGame();
			
		}
		
	}
	function answer2(event){
		if(clicked3 == true){
			if(clicked2==true){
				/* alert("good touch on ball 3 and 2"); */
				stage.removeChild(container2);
			}
			else{
				/* alert("how did you even get here?"); */
				stage.removeAllChildren();
				nextGame();
			}
		}
		else{
				clicked2 = false;
				/* alert("3rd ball not touched yet - 2nd bad"); */
				stage.removeAllChildren();
				stage.update();
				loseLife();
				nextGame();
		}
}

	function answer3(event){
		if(clicked3==true){
			if(clicked1 == true || clicked2 == true){
				clicked3 = false;
				clicked2 = false;
				clicked1 = false;			
				/* alert("wrong"); */
				stage.removeAllChildren();
				stage.update();
				loseLife();
				nextGame();
				}
			stage.removeChild(container3);
			/* alert("3rd first good"); */
		}
	}
}
