var http = require('http'); 
var cust = require('./modules');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Swap!!'+cust.myCustomModule());
    res.end();
    // res.end('Hello Swap!!');
}).listen(8080);