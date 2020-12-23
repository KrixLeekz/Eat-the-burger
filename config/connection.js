const mysql = require("mysql");
const connection;

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
})

module.exports = connection;