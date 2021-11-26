var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    dbo.collection('students').find({}).toArray(function(err, res){
        console.log(res);
        db.close();
    })
})