// pulls in all important packages to be used
require("dotenv").config();
const Spotify = require('node-spotify-api')
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require("moment")

// pulls in the the important input arguments and assings them to a variable
var comand = process.argv[2];

var searchTerm = process.argv[3];

// checks the the first input for a comand and runs the corrisponding comand 
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
    default:
        "Why don't you try that again."
        break;
}

// searches band and prinst venue name, location and date of show
function concertThis() {

    var queryUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";
    axios.get(queryUrl)
        .then(function (response) {
           

            for(var i=0;i<10;i++){
                var convertDate = moment(response.data[i].datetime).format("MM/DD/YYYY");
                console.log(`
     ++++++++++++++++++++++++++++++++++++
     Venue name: ${response.data[i].venue.name}
     Venue location: ${response.data[i].venue.city}, ${response.data[i].venue.country}
     Venue date: ${convertDate}
     ++++++++++++++++++++++++++++++++++++++
                `)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

// search song and prints artist, song name, album name, and spotify preview url 
function spotifyThis() {

    spotify.search({
        type: 'track',
        query: searchTerm || "The Sign",
        limit: 10,
    }, function (err, data) {
        if (err) {
            return console.log(err);
        }
        // console.log(JSON.stringify(data.tracks.items, null, 2))
        for (var i = 0; i < 10; i++) {
            console.log(`
Artist Name: ${data.tracks.items[i].artists[0].name}
Song name: ${data.tracks.items[i].name}
Album name: ${data.tracks.items[i].album.name}
Preview: ${data.tracks.items[i].preview_url}

==============
            `)
        }
    });
}

// searches movie and prints title, year, IMDB and rotten tomatoes ratings, country, language, plot, and actors
function movieThis() {

    
    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl)
        .then(function (response) {
            var data = response.data;
            console.log(
    `++++++++++++++++++++
    Title: ${data.Title}
    Year: ${data.Year}
    IMDB Rating: ${data.Ratings[0].Value}
    Rotten Tomatoes: ${data.Ratings[1].Value}
    Country: ${data.Country}
    Languages: ${data.Language}
    Actors: ${data.Actors}
+++++++++++++++++++++`);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// reads the random.txt and runs what ever comand and search term are in it 
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        console.log(data.split(","))

        var dataArr = data.split(",");
        let searchTerm = dataArr[1];
        console.log(searchTerm)
        switch (dataArr[0]) {
            case "concert-this":
                concertThis(searchTerm);
                break;
            case "spotify-this-song":
                spotifyThis(searchTerm);
                break;
            case "movie-this":
                movieThis(searchTerm);
                break;
        }
    });
}