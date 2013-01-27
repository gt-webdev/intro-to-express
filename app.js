//Render Views
var express = require('express');
var app = express();
var myList = []; 

app.set("view engine", "ejs"); //this line sets our view engine as ejs. it's almost in plain english!

app.get('*', function(req, res){ 
  var responseString = "Currently, the list have:", i;
  for (i=0; i<myList.length; i+=1){
    responseString += "\n" + myList[i];
  }
  res.send(responseString); 
});

app.use(express.bodyParser());

app.post('*', function(req, res){ 
  if (req.body['item']){ 
    myList.push(req.body['item']); 
    res.send(200); 
  } else {
    res.send(400); 
  }
});

app.listen(8080);
