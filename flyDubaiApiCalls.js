// var requestify = require('requestify'); 

var data =   {
     "carrierCode" : "FZ",
     "flightNumber": "001",
     "flightDate": "20-10-2017",
     "origin": "",
     "destination":""
    };    

//     // console.log(params);

//Fly dubai api calls code 

// var request = require('request');

// request.post({
//   headers: {'content-type' : 'application/json'},
//   url:     'https://devapi.flydubai.com/ops/v3/flightinfo',
//   body:    JSON.stringify(data)
// }, function(error, response, body){
//   console.log(body);
// });



// var request = require('request');
 
// var accessToken = '6WBDLYHKDR64AUV2KKU26RPUX6EDWWWL';
 
// request({
//      url: 'https://api.wit.ai/message?v=20141022&q=My+flight+got+delayed+today',
//   auth: {
//     'bearer': accessToken
//   }
// }, function(err, res) {
//   console.log(res.body);
// });