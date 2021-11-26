var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    // fs.readFile('<filename>', function(err,data){
    fs.readFile('filesystem.html', function(err,data){
        res.write(data);
        return res.end();
    })
}).listen(8080);