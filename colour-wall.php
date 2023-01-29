<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
	<title id="colour-wall">Colour Wall</title>

	<?php include 'inc/header-links.inc.php'; ?>

	<script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/randomColor.js"></script>

</head>

<?php include 'inc/nav-bar.inc.php'; ?>

<body>
	<h1 id="pageTitle" class="pageTitle">Random Colour Wall Generator</h1>

	<button id="alert" class="alertBoxClose vertical-center" onclick="closeAlertBox()" style="visibility: hidden;">
		<p id="alert-text">
			HEX Code Copied To Clipboard
			<br>
			<u>Click to Close</u>
		</p>
	</button>


	<div id="colourPalette" class="flex-container palette">
	</div>
</body>

<?php include 'inc/footer.inc.php'; ?>

<script type="text/javascript" src="js/random-colour.js"></script>

<script>

	
</script>

</html>