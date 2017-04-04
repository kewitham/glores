var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "Secare333", //Your password
    database: "gloresnom_db"
})

var app = express();

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

// connection.query('SELECT * FROM nomstatus WHERE name=?', [name], function(err, res) {
//     		for (var i = 0; i < res.length; i++) {
//         console.log(res[i].id + " | " + res[i].name + " | " + res[i].status);
//     	}

})

app.get("/",function(req,res){
connection.query('SELECT * FROM nomstatus WHERE name=?', [name], function(err, res) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);