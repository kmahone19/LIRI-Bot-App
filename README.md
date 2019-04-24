# LIRI Bot App
  A Rutgers Coding Bootcamp Assignment
-----

## Technologies Used

- JavaScript
- Node.js
  - Axios
  - Dotenv
  - Moment 
  - Node-Spotify-Api

-------

## Discription

LIRI is a Language Interpretation and Recognition Interface, much like SIRI it takes in your inquires and responds with all the information you could need. Right now, LIRI has 4 comands, `concert-this`, `spotify-this-song`, `movie-this`, and `do-what-it-says`. Below you can see exactly how each comand works

  ### Concert This
  ---
  Concert this works in conjunction with the Bands in Town Api to search a band by it's name and pull up their next 10 concerts. Each of the concerts come with the venue's name, the location by city and country, and the date of the show. To run the comand all you have to do is `node liri.js concert-this "Any Band"`.

![concert this running](https://github.com/kmahone19/LIRI-Bot-App/blob/master/readMeimages/Capture.JPG)

  ### Spotify this song
  ---
  Spotify this song obviously works with the Spotify Api to search song titles and return the top 10 results. The response will give you the song title, artist name, album name, and Spotify's preview link so you can check out the songs.The only hitch with this comand is that you will need your own `.env` with your own spotify keys in order to run the search. To run this comand all you need to do is `node liri.js spotity-this-song "Any Song"`. If you forget to put in a song, it will search for The Sign by Ace of Base.

![spotify this running](https://github.com/kmahone19/LIRI-Bot-App/blob/master/readMeimages/Congs.JPG)

  ### Movie This
  ---
  Movie this works in conjunction with the OMDB Api to search movies by title and returns with all the most important information about the movie. The response includes title, release year, IMDB and Rotten Tomatoes ratings, Country of Origin, language the movie is in, movie plot, and the major actors in the film. To run this search use `node liri.js movie-this "Any movie"`. If you didn't remenber to put in a movie, it will search for Mr.Nobody.

![movie this running](https://github.com/kmahone19/LIRI-Bot-App/blob/master/readMeimages/movies.JPG)

  ### Do what it says
  ---
  The last of the LIRI comands is a bit of a fun one. To run is all you need is `node liri.js do-what-it-says`. When it runs it will read the random.txt file and use what ever is in there as the two arguments for a comand call and it's search term. 

![do what it says running](https://github.com/kmahone19/LIRI-Bot-App/blob/master/readMeimages/random.JPG)





