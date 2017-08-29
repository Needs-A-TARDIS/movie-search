$(document).ready(function () {

//Get the search results from TMDB api 
/* This code was made with help from W3C schools JQuery & JavaScript tutorials and StackOverflow user PhearOfRayne at https://stackoverflow.com/questions/14152276/themoviedb-json-api-with-jquery, user NoBrainer at https://stackoverflow.com/questions/699065/submitting-a-form-on-enter-with-jquery*/
	$('button').click(goSearch())
	$('.input').keypress(function (e) {
	if (e.which == 13) {
		goSearch();
		return false;
	  }
	});
	function goSearch() {
		var burl = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query="
		//Get user input
		var q = document.getElementById("query").value;
		console.log("The query was "+q);	
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
				movieDesc = searchResults[i].overview;
				movieTitle = searchResults[i].title;
				toShow = toShow+movieTitle+"<br />"+movieDesc+"<br /> <br />";
			}
			document.getElementById("results").innerHTML = toShow;			
		}

	}
//Show/hide buttons 
	$("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
//document.getElementById("results").innerHTML = mysearch();
//https://developers.themoviedb.org/3/search/search-keywords
});


