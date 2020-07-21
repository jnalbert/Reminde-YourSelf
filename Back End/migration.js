// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('./database.sqlite');

// db.serialize(() => {
//     db.run('CREATE TABLE IF NOT EXISTS `reminders` ( ' +
//            '`id` INTEGER NOT NULL , ' +
//            '`name` TEXT NOT NULL, ' +
//            '`email` TEXT NOT NULL, ' +
//            '`date1` DATE NOT NULL, ' +
//            '`time1` TIME NOT NULL, ' +
//            '`title` TEXT NOT NULL, ' +
//            '`message` TEXT NOT NULL, ' +
//            'PRIMARY KEY(`id`) )');
// })


const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Spike108523",
    insecureAuth: true
  });
  
con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    });

