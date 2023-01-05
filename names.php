<?php session_start();?>
<!DOCTYPE html>
<html>

<head>
	<title>Random Word Gen</title>
	<?php include 'inc/header-links.inc.php';?>
</head>

<?php include 'inc/nav-bar.inc.php';?>

<body>
	<h1>Random Name Generator</h1>
	<br>
	<div id="names" class="palette">
		<button class="" onclick="outputName();">Generate</button>
		
		<br>
		<br>

		<div class="randomName centre" id="randomName" onClick="navigator.clipboard.writeText(randomName); copySuccess()">
		</div>
		<br>
		<div id="copySuccess"></div>
	</div>
</body>

<?php include 'inc/footer.inc.php';?>

<script type="text/javascript" src="js/random-name.js"></script>
<script type="text/json" src="names.txt"></script>

</html>