$(document).ready(function () {

//Get the search results from TMDB api 
/* This code was made with help from W3C schools JQuery & JavaScript tutorials and StackOverflow user PhearOfRayne at https://stackoverflow.com/questions/14152276/themoviedb-json-api-with-jquery, user NoBrainer at https://stackoverflow.com/questions/699065/submitting-a-form-on-enter-with-jquery
List expansion comes with help from http://jsfiddle.net/ytXFQ/ */
	
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
				entryStart	= "<ul class='showHide'>";
				entryEnd	= "<br /></ul>";
				movieDesc	= searchResults[i].overview;
				movieImg	= "http://image.tmdb.org/t/p/w185//"+searchResults[i].poster_path;
				imgHTML		= "<img src='"+movieImg+"' alt='"+"movie poster for"+searchResults[i].title+"'>";
				movieTitle	= "<h4>"+ searchResults[i].title + "</h4>";
				toShow = toShow+
					entryStart+
						movieTitle+
						"<li>"+"<tr>"+
							"<td>"+imgHTML+"</td>"+
							"<td>"+movieDesc+"</td>"+
						"</tr>"+"</li>"+
					entryEnd;
			}
			//Toggle showing & hiding details  
			$(".showHide").on("click",function(){
				$(this).find("li").toggle();
			});
		}
		document.getElementById("results").innerHTML = toShow;			

	}

});


