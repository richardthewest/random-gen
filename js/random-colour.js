// Random Colour Generator JS

//x equals amount of colours to generate
var x = 4;


//Construct array or random colours 
const colors = randomColor({ count: x });
const rgbValues = [];

//Create for loop for querySelector
for (i = 0; i < x; i++) {
    let v = i+1;
    document.querySelector('.palette div:nth-child(' + v++ + ')').style.backgroundColor = colors[i];
    //document.getElementById("colour0" + (v -1)).innerHTML = divInner;
    //console.log("colour0" + (v -1));
};
let divInner = "test";
document.querySelectorAll(".colorBox").innerHTML = "test";


/*
//for loop to loop through each of the divs created
let colorQty = '';
let i = 0
for (; i < x; i++) {
    colorQty += i;
    const qty = [i];
    //console.log(qty);
};
//console.log(colorQty);
*/

//create code to add regValue and hexVaue class divs to colorBox

//colour 01
let color01 = document.getElementById("colour01").style.backgroundColor;
let stringEnd01 = color01.length - 1;
rgbValues[0] = color01.slice(4, stringEnd01);
console.log(rgbValues[0], colors[0]);
document.getElementsByClassName("rgbValue01").innerHTML = rgbValues[0];
document.getElementsByClassName("hexValue01").innerHTML = colors[0];


//colour 02
let color02 = document.getElementById("colour02").style.backgroundColor;
let stringEnd02 = color02.length - 1;
rgbValues[1] = color02.slice(4, stringEnd02);
console.log(rgbValues[1], colors[1]);
document.getElementsByClassName("rgbValue02").innerHTML = rgbValues[1];
document.getElementsByClassName("hexValue02").innerHTML = colors[1];


//colour 03
let color03 = document.getElementById("colour03").style.backgroundColor;
let stringEnd03 = color03.length - 1;
rgbValues[2] = color03.slice(4, stringEnd03);
console.log(rgbValues[2], colors[0]);
document.getElementsByClassName("rgbValue03").innerHTML = rgbValues[2];
document.getElementsByClassName("hexValue03").innerHTML = colors[2];


//colour 04
let color04 = document.getElementById("colour04").style.backgroundColor;
let stringEnd04 = color04.length - 1;
rgbValues[3] = color04.slice(4, stringEnd04);
console.log(rgbValues[3], colors[3]);
document.getElementsByClassName("rgbValue04").innerHTML = rgbValues[3];
document.getElementsByClassName("hexValue04").innerHTML = colors[3];

//Copy Success Function
function copySuccess() {
    console.log("Copy Success");
    document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
};


//Internal Divs
//document.querySelector(".colorBox").innerHTML = "<div><p>test</p></div><br><div><p>test</p></div>";


/*
//OnClick Function
//let copyRgbValue01 = navigator.clipboard.writeText(rgbValue01);
//let copyRgbValue02 = navigator.clipboard.writeText(rgbValue02);
//let copyRgbValue03 = navigator.clipboard.writeText(rgbValue03);
//let copyRgbValue04 = navigator.clipboard.writeText(rgbValue04);

//let copyHex01 = navigator.clipboard.writeText(colors[0]);
//let copyHex02 = navigator.clipboard.writeText(colors[1]);
//let copyHex03 = navigator.clipboard.writeText(colors[2]);
//let copyHex04 = navigator.clipboard.writeText(colors[3]);

function testFunc () {
    if (document.getElementsByClassName("colorBox").children.innerHTML.includes("rgbValue")) {
        console.log("success");
    };
}

*/
