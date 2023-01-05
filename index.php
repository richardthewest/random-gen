<?php session_start();?>
<!DOCTYPE html>
<html>
	
<head>
	<title>Random Gen</title>
	<?php include 'inc/header-links.inc.php';?>
</head>

<?php include 'inc/nav-bar.inc.php';?>

<body>
	<div id="index" class="palette centre">
		<button onClick="outputName()">Refresh</button>
		<div id="copySuccess"></div>
	</div>
</body>

<?php include 'inc/footer.inc.php';?>

</html>