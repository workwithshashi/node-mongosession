var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    var obj1 = [
        {name:"Navin", adress:"Chennai"},
        {name:"Sairam", adress:"Chennai"},
        {name:"Ganesh", adress:"Chennai"},
        {name:"Hardik", adress:"Gujrat"},
        {name:"Pavetharan", adress:"Chennai"},
        {name:"Varthani", adress:"Chennai"},
        {name:"Navin", adress:"Chennai"},
        {name:"Sairam", adress:"Chennai"},
        {name:"Ganesh", adress:"Chennai"},
        {name:"Hardik", adress:"Gujrat"},
        {name:"Pavetharan", adress:"Chennai"},
        {name:"Varthani", adress:"Chennai"}
    ];
    dbo.collection("students").insertMany(obj1, function(err, res){
        if(err) throw err;
        console.log('Multiple record inserted successfully : --' + res.insertedCount +" -- "+ res.insertedIds +" -- "+ res.acknowledged);
        db.close();
    });
});