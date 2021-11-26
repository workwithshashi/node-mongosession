var fs = require('fs');
var rs = fs.createReadStream('./abc.txt');
rs.on('open', function(){
    console.log('You just opend the file');
});