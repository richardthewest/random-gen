url = "https://www.whats-on-netflix.com/library/categories/";

function outputName() {
    fetch(url)
	.then((response) => {
  		return response.text();
	})
	.then((text) => {
        console.log(text);
        //document.getElementById('randomName').innerHTML = randomName;
	});
};
