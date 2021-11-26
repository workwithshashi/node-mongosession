
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    // var query = {adress:"Chennai"} // one update
    var query = {adress:"/^C/"} // many
    var newVal = {$set : {name:"Navin", adress: "US"}};
    // dbo.collection('students').updateOne(query, newVal, function(err, res){
    //     console.log(res);
    //     db.close();
    // })

    dbo.collection('students').updateMany(query, newVal, function(err, res){
        console.log(res);
        db.close();
    })
})