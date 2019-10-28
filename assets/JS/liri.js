require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require('moment');


var userInput = process.argv.slice(3).join(" ");
var userCommand =  process.argv[2];

function movieThis (movieName){
    var axios = require("axios");

    if(!movieName){
      movieName = "Mr. Nobody"
    }

axios.get("http://www.omdbapi.com/?t="  + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    
    console.log("The movie's title is: " + response.data.Title);
    console.log("The movie's actors are: " + response.data.Actors);
    console.log("The movies plot is: " + response.data.Plot);
    console.log("Year of release: " + response.data.Year);
    console.log("Language Spoken: " + response.data.Language);
    console.log("Country Filmed in: " + response.data.Country);
    console.log("The movies imdb rating is: " + response.data.imdbRating);
    console.log("The movies rotten tomatos rating is: " + response.data.Ratings[1].Value);
  })
  .catch(function(error) {
    if (error.response) {
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}
