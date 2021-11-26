var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    var obj1 = {name:"Shashi", adress:"Delhi"};
    dbo.collection("students").insertOne(obj1, function(err, res){
        if(err) throw err;
        console.log('One record inserted successfully');
        db.close();
    });
});