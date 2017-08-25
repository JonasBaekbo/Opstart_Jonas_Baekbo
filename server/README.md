# Node.js Server - Forklaring af simpelt site med navigation mellem 2 sider

Jeg fik en opgave, at jeg skulle lave en Node.js server med et simpelt site som kunne navigere mellem 2 sider.
Dette er de koder jeg har skrevet:
```javascript
//Selve serveren
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const router = require('./controllers/routesController');

http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);
```
```javascript
//Siderne og modulet
const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write(`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
				
				<title>Document</title>
			</head>
				<body><h1>Hejsa og velkommen!</h1><p>Nu skal vi teste om vi kan komme ind p&aring en anden side!</p><a href='index'>Test det her!</a></body>
				</html>`);
			res.end();}
		else if(pathname === '/index'){
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write(`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
				
				<title>Document</title>
			</head>
			<body>
				<h1>Den anden side!</h1>
				<p>Det virker da!</p>
				<a href='forside'>Vil du tilbage igen?</a>
			</body>
			</html>`);
			res.end();
		}
		 else {
			res.statusCode = 404;
			res.end("ups...");
		}
	}
};
```
## Første del - Selve serveren
På serveren er der til at starte med 3 const variabler.
> 1. Variablen http der bruger require('http') da man skal bruge http modulet fra Node.js.
> 2. Variablen hostname der fortæller hvad for en ip der skal bruges på serveren.
> 3. Variablen port der fortæller hvad for en port serveren skal bruge.

```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
```
Derefter er der en anden const variabel som har en require() funktion i sig. I Node.js kan du også lave dine egne moduler, og derfor laver jeg et modul der fortæller hvor at jeg skal finde mit modul.
```javascript
const router = require('./controllers/routesController');
```
Efter det laver jeg selve serveren ved at bruge http.createServer og lave en anonym funktion med 2 argumenter(et til request og et til response). Derefter fortæller jeg til serveren at den skal udsende den til den port som står i variablen port og med det hostname som står i variablen hostname

```javascript
http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);
```
Til sidst fortæller jeg sil serverens konsol hvad for et URL det kører på(altså hvad for en ip-adresse og hvad for en port der bliver brugt).

```javascript
console.log(`serveren kører på http://${hostname}:${port}/`);
```
## Del 2 - Siderne og modulet

Til at starte med er der en const variabel der bruger require('url'). Den skal bruges til at få fat i modulet URL i Node.js

```javascript
const url = require('url');
```
Bagefter det kommer selve modulet. Hele modulet er en anonym funktion. Det første i modulet er en variabel pathname, som kigger på URL, og på hvad for en sti som den er på.

```javascript
var pathname = url.parse(req.url, true).pathname;
```
Bagefter spørger den om pathname er det samme som '/forside' og hvis det er, udføres koden nedenunder.

```javascript
if (pathname === '/forside') { //Er det sandt? Fortsæt!
```
Så fortæller serverens response at statuskoden for siden er 200, som står for "OK". Derefter fortæller den klienten(browseren) at det indhold der er på siden er html.

```javascript
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
```
Så udskriver den html på siden og til sidst fortæller den serveren at den skal stoppe med at gøre noget(men ikke lukke ned).
```javascript
res.write(
    `<!DOCTYPE html>
    <html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
		<title>Document</title>
	</head>
	<body>
        <h1>Hejsa og velkommen!</h1>
        <p>Nu skal vi teste om vi kan komme ind p&aring en anden side!</p>
        <a href='index'>Test det her!</a>
    </body>
	</html>`);
res.end();}
```
Hvis ikke pathname er '/forside', så tjekker den om pathname er '/index'. Hvis dette er tilfældet så gør den det samme som med '/forside', men med noget andet HTML kode.

```javascript
else if(pathname === '/index'){
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write(
    `<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	    <title>Document</title>
	</head>
	<body>
		<h1>Den anden side!</h1>
		<p>Det virker da!</p>
		<a href='forside'>Vil du tilbage igen?</a>
	</body>
	</html>`);
res.end();
		}
```
Hvis pathname ikke er '/forside' eller '/index', så udsender serverens response at dens statuskode er 404, som betyder "Not Found" altså at siden ikke er blevet fundet. Derefter udskriver den en fejlbesked på siden.
Efter det slutter modulet

```javascript
else {
			res.statusCode = 404;
			res.end("ups...");
		}
	}
};
```