//random word generator
const url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";

function outputWord() {
    fetch(url)
	.then((response) => {
  		return response.text();
	})
	.then((text) => {
        const arr = text.split(/\r?\n/);
        //test for array
        //let y = Array.isArray(arr);

        //random number generator
        let arrLength = arr.length;
        var x = Math.floor((Math.random() * arrLength));

        let randomWord = arr[x];
        console.log(randomWord);
        document.getElementById('randomWord').innerHTML = randomWord;
	});
};

function copySuccess() {
    var pasteRandomWord = document.getElementById('randomWord').innerHTML;
    navigator.clipboard.writeText(pasteRandomWord);
    console.log("Copy Success");
    document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
};