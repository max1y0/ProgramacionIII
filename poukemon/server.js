const http = require('http')
const fs = require('fs')

const host = 'localhost'
const port = 3000

const server = http.createServer((req, res) =>{
    if (req.url === "/") {
        fs.readFile("./index.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
    }
    else if (req.url.match("\.css$")) {
        fs.readFile("./style.css", function (err, css) {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(css);
        });
    }
    else if (req.url.match("\.js$")) {
        fs.readFile("./script.js", function (err, js) {
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(js);
        });
    }
});

server.listen(port, host, ()  => {
    console.log("servidor funcionando en", host, port)
})