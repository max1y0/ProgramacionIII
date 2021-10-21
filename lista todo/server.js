var http = require('http');
var fs = require('fs');
var path = require('path');
let mail = "maxi@gmail.com"
//creamos el server y esperamos el post desde el login
http.createServer(function (req, res) {

    /* switch (req.url) {
        case "/":
            fs.readFile("./login.html", "UTF-8", function(err, html){
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(html);
            });
            break;
        case (req.url.match("\.css$")):
            var cssPath = path.join(__dirname, req.url);
            var fileStream = fs.createReadStream(cssPath, "UTF-8");
            res.writeHead(200, {"Content-Type": "text/css"});
            fileStream.pipe(res)
            break;
        case (req.url.match("\.js$")):
            var imagePath = path.join(__dirname, req.url);
            var fileStream = fs.createReadStream(imagePath);
            res.writeHead(200, {"Content-Type": "javascript"});
            fileStream.pipe(res);
            break;
        case (req.url.match("\.index.html")):
            fs.readFile("./index.html", "UTF-8", function(err, html){
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(html);
            });
            break;
        case (req.method === 'POST'):
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body);
                let dato = body.split('&')
                let usuario = dato[0].split('=')
                let pass = dato[1].split('=')
                usuario = usuario[1]
                pass = pass[1]
                usuario + decodeURIComponent(usuario.replace('/'))
                con.connect(function(err) {
                    if (err) throw err;
                    con.query("select usuario.mail, todo.id, item.id_todo,item.contenido from usuario inner join todo on '"+mail+"' =todo.mail_user inner join item on todo.id =item.id_todo", function (err, result, fields) {
                      if (err) throw err;
                      console.log(result);
                    });
                  });
            });
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("No Page Found");
            break;
    } */
    /* fs.readFile("./index.html", "UTF-8", function(err, index){
        res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        res.end(index);
    }); */
    if (req.url === "/") {
        fs.readFile("./login.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
    } else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);

    } else if (req.url.match("\.js$")) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "javascript" });
        fileStream.pipe(res);
    }else if (req.url.match("\.datos.json")) {
            var imagePath = path.join(__dirname, req.url);
            var fileStream = fs.createReadStream(imagePath);
            res.writeHead(200, { "Content-Type": "application/json" });
            fileStream.pipe(res);
    } else if (req.url.match("\.index.html")) {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body);
                let dato = body.split('&')
                let usuario = dato[0].split('=')
                let pass = dato[1].split('=')
                usuario = usuario[1]
                pass = pass[1]
                usuario = decodeURIComponent(usuario.replace(/\+/g, ' '));
                console.log(usuario)
                con.connect(function (err) {
                    //if (err) throw err;
                    con.query("select usuario.mail, todo.id, item.id_todo,item.contenido from usuario inner join todo on '" + usuario + "' =todo.mail_user and '" + usuario + "'= usuario.mail inner  join item on todo.id =item.id_todo", function (err, result, fields) {
                        if (result == '') {
                            console.log("no esta")
                            //con.query("insert into usuario values ('"+usuario+"', 'sososo');")
                        }
                        else {
                            console.log(result)
                            let contenido=JSON.stringify(result)
                            console.log(contenido)
                            fs.writeFile('datos.json', contenido, (err) => {
                                if (err) throw err;
                                console.log('Data written to file');
                            });
                            //res.json(result)
                            /* res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.write(JSON.stringify({
                                data: 'Hello World!'
                            }));
                            res.end("ola") */
                        } 
                    });
                });
                
            });
        }
        fs.readFile("./index.html", "UTF-8", function (err, html) {
            
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }
    /* if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log(body);
            let dato = body.split('&')
            let usuario = dato[0].split('=')
            let pass = dato[1].split('=')
            usuario = usuario[1]
            pass = pass[1]
            usuario + decodeURIComponent(usuario.replace('/'))
            con.connect(function(err) {
                if (err) throw err;
                con.query("select usuario.mail, todo.id, item.id_todo,item.contenido from usuario inner join todo on '"+mail+"' =todo.mail_user inner join item on todo.id =item.id_todo", function (err, result, fields) {
                  if (err) throw err;
                  console.log(result);
                });
              });
        });

    } */
}).listen(8080);


//coneccion de prueba con la base de datos
var mysql = require('mysql');
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const { getMaxListeners } = require('process');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tododb"
});


//query de prueba
/* con.connect(function(err) {
  if (err) throw err;
  con.query("select usuario.mail, todo.id, item.id_todo,item.contenido from usuario inner join todo on usuario.mail =todo.mail_user inner join item on todo.id =item.id_todo", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log("hola"+mail+"chau")
  });
});

 */