const mysql = require('mysql');

const con = mysql.createConnection({
    host: "tree-docs.c1eu89hjpaa7.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password",
    port: "3306"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query('CREATE DATABASE IF NOT EXISTS treedocs;');
    con.query('USE treedocs;');
    con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });
    con.query(`SELECT * FROM treedocs.users`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result);
        }
    });
    con.end();
});

