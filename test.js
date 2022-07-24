const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "c21db",
  password: "12345",
  port: 5432,
});

pool.query('SELECT * FROM data ORDER BY id ASC', (err, result) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows) 
})

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