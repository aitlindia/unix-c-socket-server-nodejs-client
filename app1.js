/*
var fs = require('fs');

console.log("Hello World");

var fs = require('fs');

fs.readFile("Sample.txt",function(error,data)
{

    if(error)console.log("Reading Data found error");
    else console.log("Reading Data completed: "+ data);


});



*/

/*
$ npm install <Module Name>
$ npm install express

 var express = require('express');
*/


var express = require('express');

var http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body as "Hello World"
    response.end('Hello K.Alam\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');