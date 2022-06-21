const http = require('http')
const fs = require('fs')

const host = 'localhost'
const port = 3000

const server = http.createServer((req, res) =>{
    if (req.url === "/") {
        fs.readFile("./inicio.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
    }
    else if (req.url === "/ingresar.html") {
        fs.readFile("./ingresar.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
        if (req.method === 'POST') {
                console.log("quiero un post")
                let datos = '';
                req.on('data', chunk => {
                    datos += chunk.toString();
                });
                req.on('end', () => {
                //aca escribo todo lo que me llego del post de inicio de sesion
                console.log(datos);
                //la idea es buscar como sacar de "datos" el usuario solo

                //teniendo el usuario puedo hacer la consulta a la base de datos
            });
            res.writeHead(302, {'Location': '/index.html'});
            res.end();
        }
    }
    else if (req.url === "/registro.html") {
        fs.readFile("./registro.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
    }
    else if (req.url === "/index.html") {
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
    else if (req.method === 'GET') {
                console.log("quiero un get")
                var fullUrl = new URL('http://' + req.headers.host + req.url)
                var item = fullUrl.searchParams.get('vida')
                console.log(req.headers.host,req.url,item);
                req.on('end', () => {
                console.log('entre al end')
                //aca se podria agregar la query para poder agregar el item a la base de datos
            });
            }
});

server.listen(port, host, ()  => {
    console.log("servidor funcionando en", host, port)
})