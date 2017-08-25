var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/search/keyword?page=1&query=tomorrowland&api_key=c86ce297941a783af9f40b9a9985424d",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
 console.log(response);
});
//$(document).ready(