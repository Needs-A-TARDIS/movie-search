/* A good bit of help came from W3C schools JQuery & JavaScript tutorials and StackOverflow user PhearOfRayne at https://stackoverflow.com/questions/14152276/themoviedb-json-api-with-jquery
Josh Habdas and Mike Trpcic at 
https://stackoverflow.com/questions/2194992/jquery-is-not-defined
All hail StackOverflow!*/

$(document).ready(function () {
	//TODO: 1 Get the user input 

	//Get the search results from TMDB api 
	$('button').click(function() {
		var burl = "https://api.themoviedb.org/3/search/keyword?page=1&query="
		var q = "wonder" 
		var apikey = "c86ce297941a783af9f40b9a9985424d"
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": burl + q + "&api_key=" + apikey,
		  "method": "GET",
		  "headers": {},
		  "data": "{}",
		  "jsonpCallback": "showResults()",
		  "contentType": "application/json",
		  "dataType": "jsonp"
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		});
	})   
	//TODO: 2 Get the details of the movies 
	//Print the search results 
	/* function showResults(searchResults){	
		console.log("showResults called");
		for (i=0;i<searchResults.length;i++) {
			console.log("printing searchresults"+i.toString());
			movieID = searchResults[i].id.toString();
			movieTitle = searchResults[i].name;
			document.getElementById("results").innerHTML = movieID+"/n "+movieT7itle;
		}
	} */
});


//document.getElementById("results").innerHTML = mysearch();
//https://developers.themoviedb.org/3/search/search-keywords



