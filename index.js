const express = require("express");
const bodyParser = require("body-parser")


const hostname = '127.0.0.1';
const port = 3001;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/form.html");
});
  
app.post("/display", function(req, res) {
  var fname = req.body.fullName;
  var lname = req.body.username;
    
  var FullName = fname +" "+ lname ;
    
  res.send("<b>Full Name is -</b> " + FullName);
});
  
app.listen(3007, function(){
  console.log(`server is running on http://${hostname}:${port}/`);
})