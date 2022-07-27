// const { Pool } = require("pg");
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "c21db",
//   password: "12345",
//   port: 5432,
// });


// var sort = 'DESC'
// var sortby = 'id';

// pool.query(`SELECT * FROM data ORDER BY ${sortby} ${sort} LIMIT $1 OFFSET $2`, [5, 0], (err, result) => {
//     if (err) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows) 
// })

// var id = 5;
// var string = 'SMAN';
// var integer = 5;
// var count = 1;
// var wheres = [];

// if (id != undefined){
//     wheres.push(`id = $${count++}`);
// }

// if (string != undefined){
//     wheres.push(`string = $${count++}`);
// }

// if (integer != undefined){
//     wheres.push(`integer = $${count++}`);
// }

// // console.log(wheres)

// let sql = `SELECT * FROM data`
// if (wheres.length > 0) {
//     sql += ` WHERE ${wheres.join(" AND ")}`
// }

// console.log(sql)
// console.log(params)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { string: /SMAN/ };
  var contohReg = new RegExp('SMAN');
  console.log(contohReg);
  var sortByy = 'id'
  var order = -1
  var sortMongo = `{"${sortByy}" : ${order}}`
  // sortMongo += `"${sortByy}"`;
  // sortMongo += ':';
  // sortMongo += order;
  // sortMongo += `}`


//   var coba = `{"id" : 2}`
  // coba = JSON.parse(coba);
  // console.log(coba)
//   console.log('itu', sortMongo)
//   sortMongo = JSON.parse(sortMongo);
  // console.log('ini', sortMongo)
  // sortMongo = {'id' : -1}
  dbo.collection("data").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result.length)
    db.close();
  });
});

// var x = "SMAN"
// var a = {"makanan" : 1}
// a["minuman"] = `/${x}/`
// console.log(a);