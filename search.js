$(document).ready(function () {

//Get the search results from TMDB api 
/* This code was made with help from W3C schools JQuery & JavaScript tutorials and StackOverflow user PhearOfRayne at https://stackoverflow.com/questions/14152276/themoviedb-json-api-with-jquery, user NoBrainer at https://stackoverflow.com/questions/699065/submitting-a-form-on-enter-with-jquery*/
	
	$('form').on('submit', goSearch);
	function goSearch(e) {
		var burl = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query="
		//Get user input
		var q = document.getElementById("query").value;
		var apikey = "c86ce297941a783af9f40b9a9985424d"
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": burl + q + "&language=en-US"+ "&api_key=" + apikey,
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
		return false;
	}

//Print the search results 
	function showResults(searchResults){	
		if (searchResults.length ==0 ) {
			toShow = "There aren't any movies with this keyword. Try a different spelling!"
		}
		else {
			toShow = " "
			//Print details of each movie here 
			for (i=0;i<searchResults.length;i++) {
				togStart	= "<div id='showHide'>";
				togEnd		= "</div>"
				divStart	= "<br /> <div id='details'>";
				divEnd		= "<br /> <br /> </div>";
				movieDesc	= searchResults[i].overview;
				movieTitle	= searchResults[i].title;
				toShow = toShow+togStart+ movieTitle+divStart+movieDesc + divEnd+togEnd;
			}
			document.getElementById("results").innerHTML = toShow;			
		}

	}
//Toggle showing & hiding details  
	$("#showHide").on("click",function(){
		console.log("You tried to minimize/maximize the descrtiption");
        $(this).next("#details").toggle();
    });
});


