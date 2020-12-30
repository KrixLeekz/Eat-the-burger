const connection = require("../config/connection.js");

const orm = {
    selectAll: (input, cb) => {
        connection.query(query, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, value, cb) => {
        const query = "INSERT INTO " + table + " SET ?";
        connection.query(query, value, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (table, condition, cb, id) => {
        const query = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        connection.query(query, id, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;