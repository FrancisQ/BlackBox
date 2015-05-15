<!DOCTYPE HTML>
<html>
	<head lang="en">
		<meta charset="utf-8">
		<title> Black Box | Game </title>
		<link href="../img/BBlogo.png" type="image/x-icon" rel="icon">
		<link href="../img/BBlogo.png" type="image/x-icon" rel="shortcut icon">
		
		<!--Boostrap style sheet-->
		<link href="../css/bootstrap.css" type="text/css" rel="stylesheet">
		
		<!--Global style sheet-->
		<link href="../css/base.css" type="text/css" rel="stylesheet">
		

		<!--Specific site style sheet-->
		<link href="../css/game.css" type="text/css" rel="stylesheet">
		<link href="../css/canvas.css" rel="stylesheet" >
		
		<!-- Game Scripts -->
		<script src="../javascript/preloadjs-0.6.0.combined.js"></script>
		<script src="../javascript/easeljs-0.8.0.combined.js"></script>
		<script src="../javascript/jquery-2.1.0.js"></script>
		<script src="../javascript/howler.js"></script>
		
		<script src="../javascript/simpleGame.js"></script>
		<script src="../javascript/francis.js"></script>
		<script src="../javascript/topBar.js"></script>

		<script src="../javascript/main.js"></script>
		<script src="../javascript/francis.js"></script>
		<script src="../javascript/ColoursGame.js"></script>
		<script src="../javascript/nextGame.js"></script>
		<script src="../javascript/gamePrompt.js"></script>
		<script src="../javascript/pausegame.js"></script>
		<script src="../javascript/endgame.js"></script>
		<script src="../javascript/leadergame.js"></script>
		
	</head>

	<body onload="init();">
		<div id="wrapper">
		
			<!--Nav -->
			
			<div id="main-Nav">
				<div id="nav-cont">
					<ul>
						<li> <a href="index.php" >Home</a></li>
						<li> <a href="blackbox.php">Play Blackbox</a></li>
						<li> <a href="how-2.php">How to </a></li>
					</ul>
				</div>
			</div>
			
			<!--Contents Body-->
			<div id="main-body" class="body-style">
				<div id="MainLogo">
					<img src="../img/BBlogo.png" alt="Blackbox Logo" id="blackboxLogo">
					<img src="../img/blackboxTextBlack.png" alt="Blackbox Name" id="blackboxText">
				</div>
				<div id="content">
					<div id="inner">
						
						<canvas id="canvas" width="320" height="568" > </canvas>
					</div>
					<!--Footer -->
			
					<div id="main-footer">
						<div id="nav-footer" class="imgCent">
							<!-- <embed src="../music/theme.mp3" autostart="false" loop="true"> -->
							<img src="../img/fabse.png" alt="Fabse Games" id="fabseImg">
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</body>
</html>