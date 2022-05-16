function insertMember(memInfo)
{
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("FictionLand");
  var myobj = { usename: memInfo[0], password: memInfo[1], bio: memInfo[2] };
  dbo.collection("member").insertOne(myobj, function(err, res) {
    db.close();
  });
});
}

var info = new Array(3);
var usename = document.getElementById("usename").value;
info[0] = usename;
var password = document.getElementById("password").value;
var rePassword = document.getElementById("repeatPass").value;
var bio = document.getElementById("bio").value;
info[2] = bio;

var button = document.getElementById("button")

button.onclick(function(){
/*
if(password.localeCompare(rePassword) = 0)
{
   info[1] = password
   insertMember(info)*/
   location.replace("main.html")
//}

/*else
{
   var error = document.getElementById("error")
   error.display = "inline"
}*/
})