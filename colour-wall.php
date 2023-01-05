<?php session_start();?>
<!DOCTYPE html>
<html>

<head>
	<title id="colour-wall">Colour Wall</title>

	<?php include 'inc/header-links.inc.php';?>

	<script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/randomColor.js"></script>

</head>

<?php include 'inc/nav-bar.inc.php';?>

<body>
	<h1>Random Colour Wall Generator</h1>
    <div id="colourPalette" class="flex-container palette" onclick="">
    </div>
</body>

<?php include 'inc/footer.inc.php';?>

<script type="text/javascript" src="js/random-colour.js"></script>

</html>