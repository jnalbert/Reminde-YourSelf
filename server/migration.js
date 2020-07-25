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

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Spike108523",
    database: "reminders"
  });
  
db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    db.query(`CREATE TABLE IF NOT EXISTS reminders (
      id INTEGER NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      date1 DATE NOT NULL,
      time1 TIME NOT NULL,
      title VARCHAR(255) NOT NULL,
      message VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )`, (err, result) => {
      if (err) throw err;
      console.log("table created")
    })

    });

