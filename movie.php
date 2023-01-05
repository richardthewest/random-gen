<?php session_start();?>
<!DOCTYPE html>
<html>

<head>
	<title>Random Movie Gen</title>
	<?php include 'inc/header-links.inc.php';?>
</head>

<?php include 'inc/nav-bar.inc.php';?>

<body>
	<h1>Random Movie Generator</h1>
	<br>
	<div id="movie" class="palette">
		<button class="" onclick="outputMovie();">Generate</button>

		<br>
		<br>

		<div class="randomMovie centre" id="randomMovie" onClick="navigator.clipboard.writeText(randomMovie);" style="height:auto">
			<!-- populate this with link -->
		</div>
		<br>
		<div id="copySuccess"></div>
	</div>
</body>

<?php include 'inc/footer.inc.php';?>

<script type="text/javascript" src="js/random-movie.js"></script>
<script type="text/json" src="data/movies.txt"></script>

</html>