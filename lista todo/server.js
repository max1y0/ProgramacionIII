var http = require('http');
var fs = require('fs');
var path = require('path');
let mail = "maxi@gmail.com"
//creamos el server y esperamos el post desde el login
http.createServer(function (req, res) {
    //carga la pagina del login
    if (req.url === "/") {
        fs.readFile("./login.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
        //carga el css
    } else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
        //carga el javascript
    } else if (req.url.match("\.js$")) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "javascript" });
        fileStream.pipe(res);
        //carga el archivo con los datos de usuario
    } else if (req.url.match("\.datos.json")) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "application/json" });
        fileStream.pipe(res);
        //carga la pagina index
    } else if (req.url.match("\.index.html")) {
        //si es un post, consigo los datos del usuario y hago una query a la base de datos
        //para obtener sus to-dos
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
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
                    if (err) throw err;
                });
                let contenido
                con.query("select mail from usuario where mail ='" + usuario + "'", function (err, result, fields) {

                    console.log(result)
                    if (result == '') {
                        //si la query llega vacia, el usuario no existe y lo creo
                        console.log("no esta")
                        con.query("insert into usuario values ('" + usuario + "', '" + pass + "');")
                        contenido = ''
                    }
                });
                //la query no llega vacia, hago la query completa y guardo en json
                con.query("select item.contenido from usuario inner join todo on '" + usuario + "' =todo.mail_user and '" + usuario + "'= usuario.mail inner  join item on todo.id =item.id_todo", function (err, result, fields) {
                    console.log(result)
                    //aca a la variable contenido tengo que darle el json de result
                    //y guardar ese contenido en un archivo que se llame
                    //datos.json
                });
            });
        }
        fs.readFile("./index.html", "UTF-8", function (err, html) {

            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            res.end(html);
        });
        //404 caso contrario
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }


}).listen(8080);


//conexion con la base de datos
var mysql = require('mysql');
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const { getMaxListeners } = require('process');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tododb"
});

