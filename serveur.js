var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/html", "charset": "utf-8"});
if ('nombre' in params && params['nombre']%2==0) {
        res.write('le nombre ' + params['nombre'] + ' est un nombre pair');
    }
    else {
		if('nombre' in params && params['nombre']%2!=0){
			res.write('le nombre ' + params['nombre'] + ' est un nombre impair');
		}
		else{
			res.write('bien vouloir passer un nombre en paramètre');
		}
        
    }
    res.end();
});
server.listen(8080);