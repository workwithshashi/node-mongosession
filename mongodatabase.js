var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
        console.log('DB is Created');
        db.close();
    
});