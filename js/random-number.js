//random number generator
function output() {
    var n1 = document.getElementById("inputLeft").value
    var n2 = document.getElementById("inputRight").value;
    var x = Math.floor((Math.random() * +n2) + +n1 );
    console.log(x);
    document.getElementById("randomNumber").innerHTML = x;
};


//Copy Success Function
function copySuccess() {
    console.log("Copy Success");
    var pasteRandomNumber = document.getElementById('randomNumber').innerHTML;
    navigator.clipboard.writeText(pasteRandomNumber);
    console.log("Confirm Num: " + pasteRandomNumber);
    document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
};