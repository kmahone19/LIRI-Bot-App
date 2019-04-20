require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var comand = process.argv[2];
var searchTerm = process.argv[3];

switch (comand) {
    case "concert-this":
        console.log("this works!");
        break;
    case "spotify-this-song":
        console.log("this works!");
        break;
    case "movie-this":
        console.log("this works!");
        break;
    case "do-what-it-says":
        console.log("this works!");
        break;
}

function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";
    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.EventData.VenueData.name);
            console.log(response.EventData.VenueData.city, response.EventData.VenueData.region);
            console.log(response.EventData.datetime);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function spotifyThis() {

    spotify
        .search({
            type: 'track',
            query: searchTerm
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis() {

    var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=a635e7be&t="+ searchTerm
    axios.get(queryURL)
        .then(function (response) {
            var data = response.data;
            console.log(data.title);
            console.log(data.Year);
            console.log(data.IMDBrating);
            console.log(data.rating);
            console.log(data.country);
            console.log(data.plot);
            console.log(data.actors);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function doWhatItSays() {

}