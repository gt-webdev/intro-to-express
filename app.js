//POST to a simple list
var express = require('express');
var app = express();

app.use(express.bodyParser());

var myList = []; 

app.get('*', function(req, res){ 
  var responseString = "Currently, the list have:", i;
  for (i=0; i<myList.length; i+=1){
    responseString += "\n" + myList[i];
  }
  res.send(responseString); 
});

app.post('*', function(req, res){ 
  //req.body['some-name'] corresponds to sending an HTML form with a field of the same name
  if (req.body['item']){ //first we check for existance
    myList.push(req.body['item']); //if it exists (i.e. the previous expression is not `undefined` we append to our list
    res.send(200); //and send a response saying "OK" (http code 200)
  } else {
    res.send(400); //if we encountered an error we respond by saying that the request was bad (code 400)
  }
});

app.listen(8080);
