$(document).ready(function () {
//TODO: Get the user input 
//Get the search results from TMDB api 
//This code was made with help from W3C schools JQuery & JavaScript tutorials and StackOverflow user PhearOfRayne at https://stackoverflow.com/questions/14152276/themoviedb-json-api-with-jquery
$('button').click(function() {
	var burl = "https://api.themoviedb.org/3/search/keyword?page=1&query="
	var q = "tomorrowland" 
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
//Print the search results 
	function showResults(searchResults){	
		console.log("showResults called");
		for (i=0;i<searchResults.length;i++) {
			console.log("printing searchresults"+i.toString());
			movieID = searchResults[i].id.toString();
			movieTitle = searchResults[i].name;
			document.getElementById("results").innerHTML = movieID+"/n "+movieTitle;
		}
	}

//document.getElementById("results").innerHTML = mysearch();
//https://developers.themoviedb.org/3/search/search-keywords
});


