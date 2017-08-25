const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

//const router = require('./controllers/routesController');

function init(req, res) {
    var pathname = url.parse(req.url, true).pathname;
    if (pathname === '/forside') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("Forside");
        res.end();
    } else {
        res.statusCode = 404;
        res.end("ups...");
    }
}

http.createServer(function (req, res) {
    init(req, res);
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);