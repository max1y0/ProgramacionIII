var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.js$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "javascript"});
        fileStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

}).listen(8080);

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
