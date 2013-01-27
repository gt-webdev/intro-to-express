//GET a simple list
var express = require('express');
var app = express();

var myList = ["stop", "hammer", "time"]; //we instantiate an empty list.
//notice that the list is not instantiated within a function so it's global

app.get('*', function(req, res){ 
  //now we want to display the list 
  var responseString = "Currently, the list have:", i;
  for (i=0; i<myList.length; i+=1){
    responseString += "\n" + myList[i];
  }
  res.send(responseString); 
  //the crude and simple way
  //res.send(myList); 
});

app.post('*', function(req, res){ //identical to the above example, but for POST requests
  res.send('Thank you for POSTting my page.'); //this is where we respond with a simple message
});

app.listen(8080);
