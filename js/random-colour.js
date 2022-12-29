// Random Colour Generator JS

window.onload = paletteSize;
//window.onresize = paletteSize;

//Get window size and divide equally
function paletteSize(){
    var w = document.getElementById('colourPalette').offsetWidth;
    var h = document.getElementById('colourPalette').offsetHeight;
    console.log("Browser width: " + w + "px" + "\n" + "Browser height: " + h + "px");
    
    let preciseRowLength = w / 100;
    let rowLength = Math.trunc(w / 100);

    let preciseRowHeight = h / 100;
    let rowHeight = Math.trunc(h / 100);
    
    console.log("Exact Row Length: " + preciseRowLength + "\n" + "Effective Row Length: " + rowLength + "\n" + "Exact Row Height: " + preciseRowHeight + "\n" + "Effective Row Height: " + rowHeight);


//Count Qty of Colour Boxes - This is just a test to Count End Result
var qtyColorBox = rowLength * rowHeight;
console.log(qtyColorBox);

//Construct array or random colours 
const colors = randomColor({ count: qtyColorBox});
const rgbValues = [];


//Construct (qtyColorBox) amount of colour boxes
for (i = 0; i < qtyColorBox; i++) {
    let v = i + 1;
    const jsColourBox = document.createElement("div");
    jsColourBox.className = "colorBox colorBoxSize";
    document.getElementById('colourPalette').appendChild(jsColourBox);
    document.querySelector('.palette div:nth-child(' + v++ + ')').style.backgroundColor = colors[i];
};




//Test code above
//let divInner = "test";
//document.querySelectorAll(".colorBox").innerHTML = "test";




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



/*
//create code to add regValue and hexVaue class divs to colorBox

//colour 01
let color01 = document.getElementById("colour01").style.backgroundColor;
let stringEnd01 = color01.length - 1;
rgbValues[0] = color01.slice(4, stringEnd01);
console.log(rgbValues[0], colors[0]);
document.getElementsByClassName("rgbValue01").innerHTML = rgbValues[0];
document.getElementsByClassName("hexValue01").innerHTML = colors[0];

//... cont.

//colour 04
let color04 = document.getElementById("colour04").style.backgroundColor;
let stringEnd04 = color04.length - 1;
rgbValues[3] = color04.slice(4, stringEnd04);
console.log(rgbValues[3], colors[3]);
document.getElementsByClassName("rgbValue04").innerHTML = rgbValues[3];
document.getElementsByClassName("hexValue04").innerHTML = colors[3];
*/

//Copy Success Function
function copySuccess() {
    console.log("Copy Success");
    //document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
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

};