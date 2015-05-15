var stage;

var panel = new createjs.Bitmap("../img/menuPanel.png");
var topCont = new createjs.Container();
//Global Values
var lives = 3;
var difficulty = 1;
var complete = 0;
var currentScore = 0;
var count = 30;
var soundIsOn = true;

var imgScale = .5;
var canvasW = 320;
var canvasY = 568;
var cCenter = canvasW * .5;
var cCenterY = canvasY * .5;
var alphaV = .01;
var firstTime = true;
var soundB, playB, leaderB;
var audio = new Howl({
	urls: ['../music/theme.mp3'],
	loop: true}).play();
var leadAudio = new Howl({
	urls: ['../music/transition.mp3'],
	})
//Sound that plays on correct selection
	var correctAudio = new Howl({
	urls: ['../music/achieve.mp3'],
	})
//Sound that plays when wrong selection is made
	var wrongAudio = new Howl({
	urls: ['../music/beep.mp3'],
	})
//Alternative button press sound	
	var buttonPressAudio = new Howl({
	urls: ['../music/gamepress.mp3'],
	})
//When you select the play game option sound will play	
	var introAudio = new Howl({
	urls: ['../music/intro.mp3'],
	})

/* TEST independent canvas */
function init() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	sound();
	menu2();	
}

function menu2(){
	
	// main pannel
	panel.scaleX = panel.scaleY = imgScale;
	
	
	// play button
	
	playB = new createjs.Shape();
	playB.graphics.beginFill("yellow");
	playB.graphics.moveTo(cCenter, cCenterY).lineTo(canvasW, 190).lineTo(canvasW, canvasY).lineTo(cCenter, canvasY).lineTo(cCenter, cCenterY);
	playB.alpha = alphaV;
	
	// sound button
	soundB = new createjs.Shape();
	soundB.graphics.beginFill("green");
	soundB.graphics.moveTo(cCenter, cCenterY).lineTo(0, 190).lineTo(0, canvasY).lineTo(cCenter, canvasY).lineTo(cCenter, cCenterY);
	soundB.alpha = alphaV;
	
	
	//leader button
	leaderB = new createjs.Shape();
	leaderB.graphics.beginFill("cyan");
	leaderB.graphics.moveTo(cCenter, cCenterY).lineTo(canvasW, 190).lineTo(canvasW, 35).lineTo(0, 35).lineTo(0,190);
	leaderB.alpha = alphaV;
	
	
	// adding to screen
	stage.addChild(panel);
	stage.addChild(playB);
	stage.addChild(soundB);
	stage.addChild(leaderB);
	
	
	
	//button functionality
	playB.addEventListener("click", playT);
	soundB.addEventListener("click", soundT);
	leaderB.addEventListener("click", leaderT);
	
	
	
	stage.update();
	
}

// removing the panel
function removeMain() {
	stage.removeChild(panel);
	stage.removeChild(playB);
	stage.removeChild(soundB);
	stage.removeChild(leaderB);
	
	stage.update();
}

// when clicking play
function playT(event){
	removeMain() ;
	nextGame();
	/* alert("playing game.."); */
	
}

// when clicking sound
function soundT(event) {
	if (soundIsOn == true) {
        /* alert("Sound is now set to off!") */;
		Howler.mute();
		audio.stop();
        soundIsOn = false;
    }
    else {
		/* alert("Sound is now set to on!") */;
        soundIsOn = true;
		Howler.unmute();
		audio.play();
    }
}

// when clicking leader 
function leaderT(event) {
	removeMain();
	leader();
	/* alert("leaderboards.."); */
}

function sound(){
//Leaderboard transition	
	var leadAudio = new Howl({
	urls: ['../music/transition.mp3'],
	})
//Sound that plays on correct selection
	var correctAudio = new Howl({
	urls: ['../music/achieve.mp3'],
	})
//Sound that plays when wrong selection is made
	var wrongAudio = new Howl({
	urls: ['../music/beep.mp3'],
	})
//Alternative button press sound	
	var buttonPressAudio = new Howl({
	urls: ['../music/gamepress.mp3'],
	})
//When you select the play game option sound will play	
	var introAudio = new Howl({
	urls: ['../music/intro.mp3'],
	})
}






