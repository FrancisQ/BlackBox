var achbg = new createjs.Bitmap("../img/achibg.png");
var menuBck = new createjs.Bitmap("../img/menubck.png");
var aLogo = new createjs.Bitmap("../img/achilogo.png");
var achTxt = new createjs.Bitmap("../img/achitxt.png");
var achibck  = new createjs.Bitmap("../img/LBck.png");
/*var a1 =  new createjs.Bitmap("../img/achive1.png");
var a2 =  new createjs.Bitmap("../img/achive2.png");
var a3 =  new createjs.Bitmap("../img/achive3.png");*/

// alpha for achievement indicator
var noAchi = .3;
var yeAchi = 1;

// per user space increment
var sInc = 35;
var rnkX = 75;
var usrX = 155;

// user place holders
var r1 = new createjs.Text("1", "12px Arial", "white");
var u1 = new createjs.Text("USER1", "12px Arial", "white");

var r2 = new createjs.Text("2", "12px Arial", "white");
var u2 = new createjs.Text("USER2", "12px Arial", "white");

       


function achievement() {
	// achievement bg
	achbg.scaleY = achbg.scaleX = imgScale;
	
	//Achievement Header
	aLogo.scaleY = aLogo.scaleX = imgScale;
	
	aLogo.regX = 406 * .5;
	aLogo.regY = 278 * .5;
	
	aLogo.x = cCenter;
	aLogo.y = 120;
	
	
	// Adding menu button 
	menuBck.scaleY = menuBck.scaleX = imgScale;
	
	menuBck.regY = 112 * .5;
	
	menuBck.x = 0;
	menuBck.y = 80;
	
	// back button
	achibck.scaleX = achibck.scaleY = imgScale;
    achibck.regX = 117;
    achibck.regY = 112 * .5;
    achibck.y = 80;
    achibck.x = canvasW;
	
	// achievement text 
	achTxt.scaleY = achTxt.scaleX = imgScale;
	
	achTxt.regX = 406 *.5;
	achTxt.regY = 23 * .5;
	
	achTxt.x = cCenter;
	achTxt.y = 245;
	
	
	
	// Users
	$.ajax({ url: "https://api.mongolab.com/api/1/databases/scores/collections/users?s={score:-1}&l=10&apiKey=lNSMtfgEiRFg6AMmRoF-buHNYoRynthh",
	    type: "GET",
	    dataType: "json",
	    contentType: "application/json",
	    success: function (data) {

	        $.each(data, function (index, element) {
	            players[index] = element.id;
	            rank = new createjs.Text(index + 1, "12px Arial", "white");
	            user = new createjs.Text(players[index], "12px Arial", "white")
	            one = element.achievementone;
	            two = element.achievementtwo;
	            three = element.achievementthree;

	            rank.x = rnkX;
	            user.x = usrX;
	            user.textAlign = "center";
	            rank.y = 265 + sInc * index;

	            user.y = rank.y;

                // achievement imgs 
                var a1 =  new createjs.Bitmap("../img/achive1.png");
                var a2 =  new createjs.Bitmap("../img/achive2.png");
                var a3 =  new createjs.Bitmap("../img/achive3.png");

	            a1.scaleX = a1.scaleY = .08;
	            a1.regX = a1.regY = 244 * .5;
	            a1.x = cCenter + 45;
	            a1.y = 270 + sInc*index;
	            //a1.alpha = noAchi;
	
	            a2.scaleX = a2.scaleY = a1.scaleX;
	            a2.regX = a2.regY = a1.regX;
	            a2.x = cCenter + 70;
	            a2.y = 270 + sInc*index;
	            //a2.alpha = noAchi;
	
	            a3.scaleX = a3.scaleY = a1.scaleX;
	            a3.regX = a3.regY = a1.regX;
	            a3.x = cCenter + 95;
	            a3.y = 270 + sInc*index;
	            
                if (one == false){
                    a1.alpha = noAchi;
                }
                if (two == false){
                    a2.alpha = noAchi;
                }
                if (three == false){
                    a3.alpha = noAchi;
                }

	            stage.addChild(rank, user, a1, a2, a3);
	            stage.update();

	        });

	    },
	    error: function () {
	        alert("boom");
	    }
	});

	/*u1.y = r1.y = 265;
	u1.x = usrX;
	u1.textAlign = "center";
	
	r1.x = rnkX;
	r1.textAlign = "center";*/
	
	
	/*u2.y = r2.y = 265 + (sInc * 1);
	u2.x = usrX;
	r2.x = rnkX;
	u2.textAlign = "center";
	r2.textAlign = "center";*/
	
	// Adding the images 
	stage.addChild(achbg);
	stage.addChild(menuBck);
	stage.addChild(achTxt);
	stage.addChild(achibck);
	stage.addChild(aLogo);
	
	//adding achievement icons with user
	/* stage.addChild(u1,r1,a1, a2, a3);
	stage.addChild(u2,r2); */
	
	
	// Button functionality 
	menuBck.addEventListener("click", backMenu);
	achibck.addEventListener("click", backleader);
	
	stage.update();
}


function removeAchievement() {
	stage.removeAllChildren();
}

// button functionality
function backleader(event) {
	removeAchievement();
	leader();
	buttonPressAudio.play();
}

function backMenu(event) {
	removeAchievement();
	menu2();
	buttonPressAudio.play();
}