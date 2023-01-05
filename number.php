<?php session_start();?>
<!DOCTYPE html>
<html>

<head>
	<title>Random Number Gen</title>
	<?php include 'inc/header-links.inc.php';?>
</head>

<?php include 'inc/nav-bar.inc.php';?>

<body>
	<h1>Random Number Generator</h1>
	<br>
	<div id="number" class="palette">
		<div class="inputs">
			<div class="inputs-col">
				<label for="firstNumber" id="labelLeft">First Number<br>(Default Is 1)</label>
				<br>
				<input type="number" id="inputLeft" value="" class="inputLeft" name="firstNumber" maxlength="25" required>
				<br>
			</div>
			<br>
			<div class="inputs-col">
				<label for="secondNumber" id="labelRight">Second<br>Number</label>
				<br>
				<input type="number" id="inputRight" name="secondNumber" maxlength="25" required>
				<br>
			</div>
		</div>
		<button class="" onclick="output();">Generate</button>
		<br>
		<br>

		<div class="randomNumber centre" id="randomNumber" onClick="copySuccess()">
		</div>
		<br>
		<div id="copySuccess"></div>
	</div>
</body>

<?php include 'inc/footer.inc.php';?>

<script type="text/javascript" src="js/random-number.js"></script>

</html>