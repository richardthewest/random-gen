<header>
	<div class="topNav" id="topNav">
		<ul id="links">
			<li><a href="colour-wall.php" title="Random Colour Generator" class="nav-link" target="_self">Colour</a></li>
			<li><a href="number.php" title="Random Number Generator" class="nav-link" target="_self">Number</a></li>
			<li><a href="word.php" title="Random Word Generator" class="nav-link" target="_self">Word</a></li>
			<li><a href="names.php" title="Random Name Generator" class="nav-link" target="_self">Names</a></li>
			<li><a href="countries.php" title="Random Country Generator" class="nav-link" target="_self">Country</a></li>
			<li><a href="#" title="blank" class="nav-link" target="_self">Other</a></li>
		</ul>
	</div>
</header>

<script>
	document.querySelectorAll(".nav-link").forEach((link) => {
    	if (link.href === window.location.href) {
        	link.classList.add("active");
        	link.setAttribute("aria-current", "page");
    	}
	});
</script>