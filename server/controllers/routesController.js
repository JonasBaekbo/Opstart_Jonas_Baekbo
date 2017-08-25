const url = require('url');

module.exports = {
	init: function (req, res) {
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
};