<!DOCTYPE html>
<html>

<head>
	<title>Random Word Gen</title>
	<?php include 'inc/header-links.inc.php';?>
</head>

<?php include 'inc/nav-bar.inc.php';?>

<body>
	<h1>Random Word Generator</h1>
	<br>
	<div id="word" class="palette">
		<button class="" onclick="outputWord();">Generate</button>

		<br>
		<br>

		<div class="randomWord centre" id="randomWord" onClick="navigator.clipboard.writeText(randomWord); copySuccess()">
		</div>
		<br>
		<div id="copySuccess"></div>
	</div>
</body>

<?php include 'inc/footer.inc.php';?>

<script type="text/javascript" src="js/random-word.js"></script>
<script type="text" src="names.txt"></script>

</html>