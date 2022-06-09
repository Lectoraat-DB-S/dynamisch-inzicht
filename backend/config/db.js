require('dotenv').config()
const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // database: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD
    host: "localhost",
    user: "admin",
    database: "dinwh",
    password: "supersecret"

})

let sql = "SELECT * FROM organisatie"

pool.execute(sql, function(err, result) {
    if (err) throw err;

    console.log(result)
});

module.exports = pool.promise();