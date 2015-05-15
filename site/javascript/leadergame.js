var stage;

var leaderbg = new createjs.Bitmap("../img/leaderBG.png");
var contentBox = new createjs.Bitmap("../img/LCont.png");
var bbutton = new createjs.Bitmap("../img/LBck.png");
var lTxt = new createjs.Bitmap("../img/LTxt.png");
var leaderTitle = new createjs.Bitmap("../img/LTitle.png");
var players;
var scores;


var imgScale = .5;

var canvasW = 320;
var canvasY = 568;

var cCenter = canvasW * .5;

var userX = 135;
var rankX = 50;
var scoreX = 220;

var yInc = 30;

var r1, r2;
var user1, user2;
var score1, score2;

/* TEST independent canvas */
/* function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	leader();
	
	
	
} */

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
	
    //Get user ranking
	$.ajax({ url: "https://api.mongolab.com/api/1/databases/scores/collections/users?s={score:1}&l=10&apiKey=lNSMtfgEiRFg6AMmRoF-buHNYoRynthh",
	    type: "GET",
	    dataType: "json",
	    contentType: "application/json",
	    success: function (data) {
	        alert(JSON.stringify(data));
	         $.each(data, function(index, element) {
	            players[index] = element.id;
	            score[index] = element.score;
	            alert(players + score);
	        });

	    },
	    error: function () {
	        alert("boom");
	    }
	});

	while([index]<=10){
	 r[index] = new createjs.Text([index], "12px Arial", "white");
	 user[index] = new createjs.Text(players[index], "12px Arial", "white");
	 score[index] = new createjs.Text(score[index], "12px Arial", "white");
	
	r[index].x = rankX;
	user[index].x = userX;
	user[index].textAlign = "center";
	score[index].x = scoreX;
	if(index == 0){
		r[index].y = 280;
	}
	else{
	r[index].y = 280 + yInc;;
	}
	
	user[index].y = r[index].y;
	
	score[index].y = r[index].y;
	index++;
	}
	// Leader User ranking
	/* r1 = new createjs.Text("1", "12px Arial", "white");
	 user1 = new createjs.Text(players[0], "12px Arial", "white");
	 score1 = new createjs.Text(score[0], "12px Arial", "white");
	
	r1.x = rankX;
	user1.x = userX;
	user1.textAlign = "center";
	score1.x = scoreX;
	
	r1.y = 280;
	user1.y = r1.y;
	
	score1.y = r1.y;
	
	//2
	 r2 = new createjs.Text("2", "12px Arial", "white");
	 user2 = new createjs.Text(players[2], "12px Arial", "white");
	 score2 = new createjs.Text(score[2], "12px Arial", "white");
	
	r2.x = rankX;
	user2.x = userX;
	user2.textAlign = "center";
	score2.x = scoreX;
	
	r2.y = 280 + yInc;
	user2.y = r2.y;
	
	score2.y = r2.y;
	//3
	r2 = new createjs.Text("3", "12px Arial", "white");
	 user2 = new createjs.Text(players[3], "12px Arial", "white");
	 score2 = new createjs.Text(score[3], "12px Arial", "white");
	
	r3.x = rankX;
	user3.x = userX;
	user3.textAlign = "center";
	score3.x = scoreX;
	
	r3.y = 280 + yInc;
	user3.y = r2.y;
	
	score3.y = r2.y;*/
	
	/* Adding components to the stage */
	stage.addChild(leaderbg);
	stage.addChild(contentBox);
	stage.addChild(lTxt);
	stage.addChild(leaderTitle);
	stage.addChild(bbutton);
	
	while([index] >=0){
	stage.addChild(r[index], user[index], score[index]);
	index++;
	}
	
	
	/* Functionality */
	bbutton.addEventListener("click", leaderBack);
	
	
	
	stage.update();

}


/* removes the leader page from canvas - Turns OFF*/
function removeLeader() {
	stage.removeChild(leaderbg);
	stage.removeChild(contentBox);
	stage.removeChild(lTxt);
	stage.removeChild(leaderTitle);
	stage.removeChild(bbutton);
	
	stage.removeChild(r1, user1, score1);
	stage.removeChild(r2, user2, score2);
	
	stage.update();
}

function leaderBack(event) {
	removeLeader();
	menu2();
	/* alert("going back.."); */
}