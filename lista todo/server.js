var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tododb"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM todo", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
