//delete single and multiple
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     var que = {adress:"Delhi"};
//     dbo.collection('students').deleteOne(que, function(err, res){
//         console.log(res._id + " "+ res.name);
//         db.close();
//     });
// });

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    var que = {adress:"/^G/"};
    dbo.collection('students').deleteMany(que, function(err, res){
        console.log(res.n + 'Record Deleted');
        db.close();
    });
});