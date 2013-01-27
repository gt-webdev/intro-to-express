//Render Views
var express = require('express');
var app = express();
var myList = []; 

app.use(express.bodyParser());
app.set("view engine", "ejs"); //this line sets our view engine as ejs. it's almost in plain english!

app.get('*', function(req, res){
  // the res.render() function takes the name of the view (excluding the .ejs) 
  // and an object containing all the variables used in our view and their values
  res.render("show_list",{title: "my list",
              mylist: myList});
});


app.post('*', function(req, res){ 
  if (req.body['item']){ 
    myList.push(req.body['item']); 
    res.send(200); 
  } else {
    res.send(400); 
  }
});

app.listen(8080);
