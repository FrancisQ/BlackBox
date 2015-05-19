/* var stage; */

var leaderbg = new createjs.Bitmap("../img/leaderBG.png");
var contentBox = new createjs.Bitmap("../img/LCont.png");
var bbutton = new createjs.Bitmap("../img/LBck.png");
var lTxt = new createjs.Bitmap("../img/LTxt.png");
var leaderTitle = new createjs.Bitmap("../img/LTitle.png");
var players = [];
var score = [];


var imgScale = .5;

var canvasW = 320;
var canvasY = 568;

var cCenter = canvasW * .5;

var userX = 135;
var rankX = 50;
var scoreX = 220;

var yInc = 30;

var rank;
var user;
var scores;

/* var r3, r4, ,r5, r6, r7, r8, r9, r10;
var  */

/* TEST independent canvas */
/* function start() {
	stage = new createjs.Stage(document.getElementById("canvas"));
	
	leader();
	
	 
	
} */

function leader(){
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
    /*r1 = new createjs.Text("1", "12px Arial", "white");
    user1 = new createjs.Text("USER", "12px Arial", "white");
    score1 = new createjs.Text("999999", "12px Arial", "white");
	
    r1.x = rankX;
    user1.x = userX;
    user1.textAlign = "center";
    score1.x = scoreX;
	
    r1.y = 280;
    user1.y = r1.y;
	
    score1.y = r1.y;
	
    r2 = new createjs.Text("2", "12px Arial", "white");
    user2 = new createjs.Text("2nd USER", "12px Arial", "white");
    score2 = new createjs.Text("999998", "12px Arial", "white");
	
    r2.x = rankX;
    user2.x = userX;
    user2.textAlign = "center";
    score2.x = scoreX;
	
    r2.y = 280 + yInc;
    user2.y = r2.y;
	
    score2.y = r2.y;*/



        /* Adding components to the stage */
        stage.addChild(leaderbg);
        stage.addChild(contentBox);
        stage.addChild(lTxt);
        stage.addChild(leaderTitle);
        stage.addChild(bbutton);

        /*stage.addChild(r1, user1, score1);
        stage.addChild(r2, user2, score2);*/

        /* stage.addChild(r3, user3, score3);
        stage.addChild(r4, user4, score4);
        stage.addChild(r5, user5, score5);
        stage.addChild(r6, user6, score6);
        stage.addChild(r7, user7, score7);
        stage.addChild(r8, user8, score8);
        stage.addChild(r9, user9, score9);
        stage.addChild(r10, user10, score10); */
        /* Functionality */

        //Get user ranking and add it to the page
        $.ajax({ url: "https://api.mongolab.com/api/1/databases/scores/collections/users?s={score:-1}&l=10&apiKey=lNSMtfgEiRFg6AMmRoF-buHNYoRynthh",
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {

                //alert(JSON.stringify(data));

                /* alert(JSON.stringify(data)); */

                $.each(data, function (index, element) {
                    players[index] = element.id;
                    score[index] = element.score;
                    rank = new createjs.Text(index+1, "12px Arial", "white");
                    user = new createjs.Text(players[index], "12px Arial", "white")
                    scores = new createjs.Text(score[index], "12px Arial", "white")

                    rank.x = rankX;
                    user.x = userX;
                    user.textAlign = "center";
                    scores.x = scoreX;
                    rank.y = 280 + yInc * index;

                    user.y = rank.y;
                    scores.y = rank.y;

                    stage.addChild(rank, user, scores);
                    stage.update();

                });

                /*for(i = 0; i <= 10; i++) {
                
                r[i] = new createjs.Text(i, "12px Arial", "white");
                user[i] = new createjs.Text(players[i], "12px Arial", "white");
                scores[i] = new createjs.Text(score[i], "12px Arial", "white");
                    
                r[i].x = rankX;
                user[i].x = userX;
                user[i].textAlign = "center";
                score[i].x = scoreX;
                r[i].y = 280 + yInc*i;

                user[i].y = r[i].y;
                scores[i].y = r[i].y;
        
                stage.addChild(r[i], user[i], scores[i]);
                }*/

            },
            error: function () {
                alert("boom");
            }
        });


        bbutton.addEventListener("click", leaderBack);

        stage.update();

    }


    /* removes the leader page from canvas - Turns OFF*/
    function removeLeader() {
        stage.removeAllChildren();
        stage.update();
    }

    function leaderBack(event) {
        removeLeader();
        menu2();
        /* alert("going back.."); */
    } 
