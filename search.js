function mysearch() {
//api query & settings 
var data = "{}";
var query = "wonder";
var apikey = "c86ce297941a783af9f40b9a9985424d";
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});
var url = "https://api.themoviedb.org/3/search/keyword?page=1&query=" +query+"&api_key="+apikey;
xhr.open("GET", url);

xhr.send(data);
var result = xhr.responseText; 
return result;
}
document.getElementById("uin").innerHTML = mysearch();


