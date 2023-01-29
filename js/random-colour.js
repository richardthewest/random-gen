// Random Colour Generator JS

window.onload = paletteSize;
window.onresize = function(){ location.reload(); };

//Set Pallette Width to exactly fit FlexBox with 100x100px squares
// collect height of other Elements
let navHeight = document.getElementById('topNav').offsetHeight;
let h1Height = document.getElementById('pageTitle').offsetHeight;
let footerHeight = document.getElementById('footer').offsetHeight;
let HeightOfMiscElements = navHeight + h1Height + footerHeight;

//collect height of window
var winHeight = window.innerHeight;
//remove Misc Elements
let effectivePalletteHeight = winHeight - HeightOfMiscElements;

//collect width of window
var winWidth = document.body.offsetWidth;
    console.log("Screen Width: " + winWidth + "px" + "\n" + "Screen Height: " + winHeight + "px");
    console.log("Effective Pallette Height: " + effectivePalletteHeight + " px");
    console.log("Height of other elements: " + HeightOfMiscElements + "px");

//create Pallette Columns
var palletteCol = Math.trunc(winWidth / 105);
    console.log("Number of Columns: " + palletteCol);
//create Pallette Rows
var palletteRow = Math.trunc(effectivePalletteHeight / 105);
    //console.log("Height of Pallette: " + effectivePalletteHeight / 105);
    console.log("Number of Rows: " + palletteRow);

let palletteHeight = document.getElementById('colourPalette').style.height



//Count Qty of Colour Boxes - This is just a test to Count End Result
var qtyColorBox = palletteRow * palletteCol;
console.log(qtyColorBox);

//Construct array or random colours 
const colors = randomColor({ count: qtyColorBox});
const rgbValues = [];
//document.getElementById("colourPalette").style.height = "500px";

//Create Pallete and colourBoxes
function paletteSize(){
    for (i = 0; i < qtyColorBox; i++) {
        let v = i + 1;
        //console.log(v)
        if (v > qtyColorBox) {
            break;
        } else {
            
            const jsColourBox = document.createElement("div");
            jsColourBox.className = "colorBox colorBoxSize";

            let copyColour = 'navigator.clipboard.writeText(' 
            + '"' 
            + colors[i] 
            + '"' 
            + '); '        
            + 'document.getElementById("alert").style.visibility = "visible";'

            jsColourBox.setAttribute('onclick', copyColour);
            document.getElementById('colourPalette').appendChild(jsColourBox);
            document.querySelector('.palette div:nth-child(' + v++ + ')').style.backgroundColor = colors[i];
	
        };
    };
};


function closeAlertBox() {
    document.getElementById("alert").style.visibility = "hidden";

}


/*
//Copy Success Function
function copySuccess() {
    var pasteRandomColour = document.getElementsByClassName('.colorBox').innerHTML;
    navigator.clipboard.writeText(pasteRandomColour);
    console.log("Copy Success");
    console.log("Colour: " + pasteRandomColour)
    //document.getElementById("copySuccess").innerHTML = '<p>Copied To Clipboard</p>';
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