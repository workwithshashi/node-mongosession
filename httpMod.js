var http = require('http');

//crearting an server object
http.createServer(function(req,res){ // it will excute when anyone tries to access port 8000
    res.write('Hello Hardik'); // write is used to write on web
    res.end(); // is used to end server
}).listen(8000); // accessing port