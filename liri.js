require("dotenv").config();
const Spotify = require('node-spotify-api')
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var comand = process.argv[2];
var searchTerm = process.argv[3];

switch (comand) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
}

// searches band and prinst venue name, location and date of show
function concertThis() {

    var queryUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";
    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

// search song and prints artist, song name, album name, and spotify preview url 
function spotifyThis() {

    spotify.search({
        type: 'track',
        query: searchTerm,
        limit: 10,
    }, function (err, data) {
        if (err) {
            return console.log(err);
        }

        console.log(JSON.stringify(data, null, 2));
    });
}

// searches movie and prints title, year, IMDB and rotten tomatoes ratings, country, language, plot, and actors
function movieThis() {

    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl)
        .then(function (response) {
            var data = response.data;
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// reads the random.txt and runs what ever comand and search term are in it 
function doWhatItSays() {
    fs.readFile("movies.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");

        console.log(dataArr);

    });
}