var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bb1668e0d5f170",
  password: "85138442",
  database: "heroku_0928c66eda2f8e2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});