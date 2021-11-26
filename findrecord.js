//Find One Record, find record from query, sort
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection('students').findOne({}, function(err, res){
//         console.log(res._id + " "+ res.name);
//         db.close();
//     })
// })

// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     // var query = {adress:"Gujrat"};
//     var query = {adress:/^D/};
//     dbo.collection('students').find(query).toArray(function(err, res){
//         console.log(res);
//     })
// })

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    var custsort = {name:-1};
    dbo.collection('students').find().sort(custsort).toArray(function(err, res){
        console.log(res);
    })
})