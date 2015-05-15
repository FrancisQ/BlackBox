
      function pauseScreen() {

	  //Stage variable and Mouse Events
        var container = new createjs.Container();
		
		
		//The Title Bar
		var titrect = new createjs.Shape();
		titrect.graphics.beginFill("Grey").drawRect(0,0,320,168);
		titrect.addEventListener("click", function(event) { alert("Dont do that"); })
		var mainTitle = new createjs.Text("Black Box", "40px Arial", "White");
		mainTitle.x = 70;
		mainTitle.y = 0;
		
		//High Score
		var scoreBoard = new createjs.Shape();
		scoreBoard.graphics.beginFill("black").drawRect(35,60,250,85);
		scoreBoard.addEventListener("click", function(event) { alert("Good"); })
 		
		//The clickable Menu Button
		var menuBut = new createjs.Shape();
        menuBut.graphics.beginFill("Orange").drawRect(0, 168, 320, 85);
        menuBut.addEventListener("click", backToMain);
		var menuText = new createjs.Text("Menu", "30px Arial", "White");
		menuText.x = 160;
		menuText.y = 195;
		
		//The clickable Retry Button
		var retryBut = new createjs.Shape();
        retryBut.graphics.beginFill("DeepSkyBlue").drawRect(0, 253, 320, 150 );
        retryBut.addEventListener("click", retry)
		var retryText = new createjs.Text("Retry", "40px Arial", "White");
		retryText.x = 110;
		retryText.y = 350;
		
		//The clickable Resume Button
		var resumeBut = new createjs.Shape();
        resumeBut.graphics.beginFill("LightGreen").drawRect(0, 393, 320, 165);
        resumeBut.addEventListener("click",unPause)		
		var resumeText = new createjs.Text("Resume", "40px Arial", "White");
		resumeText.x = 85;
		resumeText.y = 510;
		
		//The Stage adds the circle
		container.addChild(resumeBut);
		container.addChild(resumeText);
		container.addChild(retryBut);
		container.addChild(retryText);
		container.addChild(menuBut);
		container.addChild(menuText);
		container.addChild(titrect);
		container.addChild(mainTitle);
        container.addChild(scoreBoard);
		container.isVisible(true);
		stage.addChild(container);
		stage.update();
		
		function unPause(){
			stage.removeChild(container);
			stage.update();
			createjs.Ticker.addEventListener("tick", handleTick);
		}
		
		
	}
		
	function backToMain(event){
			stage.removeAllChildren();
			stage.update();
			init();		
		}	
		
	function retry(){
		
		lives = 3;
		difficulty = 1;
		complete = 0;
		nextGame();
		
	}
		
