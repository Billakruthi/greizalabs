var Twit = require('twit');
var config = require('./twitter-config');


//get the tweets

var T = new Twit(config);

var params = {
    q: '#FlyDubai',
    count: 200,
    lang:'en',

};


var os = require("os");
var fs = require("fs");



//get request 1. what to do, 2. what are  parameters( query , how many in count), callback function as gotData

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {

    // get all the tweets
    console.log(data);        
    // get all the tweets

    // code to get only text in the tweet

    var userTweets = data.statuses;
    for (var i = 0; i < userTweets.length; i++) {
       // console.log(userTweets[i].text);
        processInput(userTweets[i].text);
        //console.log("======================================================================================");
    }
    // code to get only text in the tweet


    // post tweet 

    // var postTweetPrarams = {
    //     status: '#FlyDubai hello world!'
    // };

    // T.post('statuses/update', postTweetPrarams, postTweetFunction)

    // function postTweetFunction(err, data, response) {
    //     if(err){
    //         console.log(err.data);
    //     }else{
    //     console.log("data")
    //     }
    // };

};


function processInput ( text ) 
{     
    var underline = "==============================================================================================";
  fs.open('log.txt', 'a', 666, function( e, id ) {
   fs.write( id, text + os.EOL+underline+os.EOL, null, 'utf8', function(){
    fs.close(id, function(){
     console.log('file is updated');
    });
   });
  });
 };