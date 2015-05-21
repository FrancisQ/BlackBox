/* var stage; */
var test = 200;
var enemyList;

function dodgeGame() {
	
	//stage = new createjs.Stage("game2");
	
	//leftclic variable
	leftclic = new createjs.Shape();
	leftclic.graphics.beginFill("grey").drawRect(0,0,stage.canvas.width/2,stage.canvas.height);
	leftclic.addEventListener("click", toggleLeft);
	stage.addChild(leftclic)

	//rightclic variable
	rightclic = new createjs.Shape();
	rightclic.graphics.beginFill("black").drawRect(stage.canvas.width/2,0,stage.canvas.width/2,stage.canvas.height);
	rightclic.addEventListener("click", toggleRight);
	stage.addChild(rightclic);
	
	//Button click to move user to the left
	function toggleLeft(){
		stage.removeChild(user);
		if(user.x >= stage.canvas.width/4){
			user.x = stage.canvas.width/4;
			stage.addChild(user);
		}
	}

	//Button click to move user to the right
	function toggleRight(){
		stage.removeChild(user);
		//if(user.x <= stage.canvas.width/2 && user.x <= stage.canvas.width){
			user.x = (stage.canvas.width*3/4);
			stage.addChild(user);
		//}
	}
	
	//Falling Object
	function createEnemy(){				
		enemyList = [];
		for(var i = 0; i < 4; i++){
			enemy = new createjs.Shape();
			enemy.graphics.beginFill("red").drawRect(0,0, stage.canvas.width/2, 40);
			enemy.name = "enemy" + i;
			makeEnemy(enemy);				
			stage.addChild(enemy);	
			enemyList.push(enemy);
		}
		stage.update();
	}
	
	function makeEnemy(otherEnemy){
	//position 1
			if(Math.floor(Math.random() * 2) == 0){
				otherEnemy.x = stage.canvas.width/2;		
			}
			else{
				otherEnemy.x = 0;
			}
			
			//position 2
			//enemy.x = 0;//stage.canvas.width/2-stage.canvas.width/2;
			otherEnemy.y = 0 - test;//-50 + test;
			otherEnemy.width = 75;
			test = test + 150;
	//enemyPosition(){
	}
	//}
	createEnemy();
	
	//User Object
	function createUser(){
		user = new createjs.Shape();
		user.graphics.beginFill("Blue").drawCircle(0,0,30);
		user.x = stage.canvas.width/4;
		user.y = 500;
		user.width = 25;
		
		stage.addChild(user);
	}
	createUser();
	
	
	stage.update();
	
}
playGameYeah();



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



//Not sure if this function is working but the logic within it is what Is important.
function checkCollisions(){
	//var xDist = user.x - enemy.x;
	//var yDist = user.y - enemy.y;
	//var distance = Math.sqrt(xDist*xDist + yDist*yDist);
	var length = enemyList.length;
	for(var i = 0; i < length; i++) {
		var currentEnemy = enemyList[i];
		var xCheck = false;
		var yCheck = false;
		if(user.x == (currentEnemy.x + 80)){
			xCheck = true;
		}
		else{
			xCheck = false;
		}
		if(user.y == currentEnemy.y || (user.y == currentEnemy.y + 40)) {
			yCheck = true;
		}
		else{
			yCheck = false;
		}
		if(xCheck && yCheck){
			stage.removeChild(user);
			stage.update;
			alert("game over your ball got touched");
		}
	}
}

//Tick function that actually moves the enemy object
function playGameYeah() {
	setTimeout(function() {
		requestAnimationFrame(playGameYeah);
		
		var length = enemyList.length;
		for(var i = 0; i < length; i++) {
			randomNumberHolder = Math.floor(Math.random() * 2);
			var currentEnemy = enemyList[i];
			currentEnemy.y = currentEnemy.y + 5;
			if(currentEnemy.y > stage.canvas.height + 50) {
				currentEnemy.y = 0;
				if(randomNumberHolder == 0){
					currentEnemy.x = stage.canvas.width/2;		
				}
				else{
					currentEnemy.x = 0;
				}
			}
		}
		/*
		enemy.y = enemy.y + 10;				
		if (enemy.y > stage.canvas.height+50) { 
			enemy.y = 0; 
			stage.removeChild(enemy);
		} */
		checkCollisions();
		stage.addChild(enemy);
		stage.update(event); // important!! without the object does not move
	}, 1000/30);
}