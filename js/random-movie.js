//random movie generator
const url = "https://raw.githubusercontent.com/richardthewest/random-gen/main/data/movies.txt";

function outputMovie() {
    fetch(url)
	.then((response) => {
  		return response.text();
	})
	.then((text) => {
        const arr = text.split(/\r?\n/); //split out unwanted spaces
        const moviesList = arr.filter (e => e); //remove all empty 'e' spaces

        //test for array
        //let y = Array.isArray(moviesList);
        
        //seperate out genre title
        
        function genreTitle(a){
            var ar = [];
    
            for(var i = 0; i < a.length; i += 2) {  // take every second element
                ar.push(a[i]);
            }
            return ar.slice(1);
        }
        

        //seperate out genre code
        function genreCode(a){
            var ar = [];
    
            for(var i = 1; i < a.length; i += 2) {  // take every second element, starting at the second ind.
                ar.push(a[i]);
            }
            return ar.slice(1);
        }

        //test for each array
        //console.log(genreTitle(moviesList));
        //console.log(genreCode(moviesList));
        
        
        //create a random number between 1 and movieList.lenth
        let arrLength = moviesList.length/2;
        var x = Math.floor((Math.random() * arrLength));

        let randomMovie = moviesList[x];
        //console.log('Array Length: ' + arrLength) //get array length
        //console.log('Random Number: ' + x) //test for x

        //define inner HTML to display
        let movieGenreTitle = (genreTitle(moviesList)[x]);
        let movieGenreCode = (genreCode(moviesList)[x]);
        let webLink = 'www.netflix.com/browse/genre/' + movieGenreCode
        console.log(webLink);

        //document.getElementById('randomMovie').innerHTML = webLink;
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