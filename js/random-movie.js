//random movie generator
const url = "https://raw.githubusercontent.com/richardthewest/random-gen/main/data/movies.txt";

function outputMovie() {
    fetch(url)
	.then((response) => {
  		return response.text();
	})
	.then((text) => {
        const arr = text.split(/\r?\n/);
        //test for array
        //let y = Array.isArray(arr);

        //random movie generator
        let arrLength = arr.length;
        var x = Math.floor((Math.random() * arrLength));

        let randomMovie = arr[x];
        console.log(randomMovie);
        document.getElementById('randomMovie').innerHTML = randomMovie;
	});
};


//Copy Success Function
function copySuccess() {
    console.log("Copy Success");
    var pasteRandomNumber = document.getElementById('randomNumber').innerHTML;
    navigator.clipboard.writeText(pasteRandomNumber);
    console.log("Confirm Num: " + pasteRandomNumber);
    document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
};