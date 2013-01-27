//final list app
var express = require('express');
var app = express();
var myList = []; 

app.use(express.bodyParser());
app.set("view engine", "ejs"); 

app.get('*', function(req, res){
  res.render("show_list",{title: "my list",
              mylist: myList});
});


app.post('*', function(req, res){ 
  if (req.body['item']){ 
    myList.push(req.body['item']); 
    res.redirect(req.url); 
  } else {
    res.send(400); 
  }
});

app.listen(8080);
