require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require('moment');


var userInput = process.argv.slice(3).join(" ");
var userCommand =  process.argv[2];