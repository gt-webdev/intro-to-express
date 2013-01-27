//simple GET and POST server
var express = require('express');
var app = express();

app.get('*', function(req, res){ //the "*" indicates that any path will respond with this function
  res.send('Thank you for GETting my page.'); //this is where we respond with a simple message
});

app.post('*', function(req, res){ //identical to the above example, but for POST requests
  res.send('Thank you for POSTting my page.'); //this is where we respond with a simple message
});

app.listen(8080);
