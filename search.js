$(document).ready(function () {

//Get the search results from TMDB api 
//This code was made with help from W3C schools JQuery & JavaScript tutorials and StackOverflow user PhearOfRayne at https://stackoverflow.com/questions/14152276/themoviedb-json-api-with-jquery
$('button').click(function() {
	var burl = "https://api.themoviedb.org/3/search/keyword?page=1&query="
	//Get user input
	var q = document.getElementById("query");
	console.log("The query was "+q);
	var apikey = "c86ce297941a783af9f40b9a9985424d"
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": burl + q + "&api_key=" + apikey,
	  "method": "GET",
	  "headers": {},
	  "data": "{}",
	  "contentType": "application/json",
	  "dataType": "jsonp"
	}

	$.ajax(settings).done(function (response) {
		showResults(response.results);
	    console.log(response);
	});
})   
//TODO 2: get details of the search results 
//Print the search results 
	function showResults(searchResults){	
		console.log("showResults called");
		toShow = " "
		for (i=0;i<searchResults.length;i++) {
			console.log("printing searchresults"+i.toString());
			movieID = searchResults[i].id.toString();
			movieTitle = searchResults[i].name;
			toShow = toShow+movieID+" "+movieTitle+"<br />";
		}
		document.getElementById("results").innerHTML = toShow;
	}

//document.getElementById("results").innerHTML = mysearch();
//https://developers.themoviedb.org/3/search/search-keywords
});


