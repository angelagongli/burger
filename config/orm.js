const connection = require("./connection");

const orm = {
    selectAll: function() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM burgers",
                (err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
        });
    },
    insertOne: function(burgerName) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO burgers SET ?",
                {burger_name: burgerName},
                (err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
        });
    },
    updateOne: function(burgerID) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE burgers SET devoured = TRUE WHERE ?",
                {id: burgerID},
                (err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
        });
    }
};

module.exports = orm;