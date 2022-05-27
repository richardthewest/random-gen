//random name generator
const url = "https://raw.githubusercontent.com/richardthewest/random-gen/main/names.txt?token=GHSAT0AAAAAABU7YGUVLQ3VBJOUT7BX52E2YUQCYVA";

function outputName() {
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

        let randomName = arr[x];
        console.log(randomName);
        document.getElementById('randomName').innerHTML = randomName;
	});
};


function copySuccess() {
    var pasteRandomName = document.getElementById('randomName').innerHTML;
    navigator.clipboard.writeText(pasteRandomName);
    console.log("Copy Success");
    document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
};