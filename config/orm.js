var connection = require("../config/connection");

var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    },
    insertOne: function (newBurger, callback) {
        connection.query("INSERT INTO burgers SET ?",
            {
                burger_name: newBurger.burger_name,
                devoured: newBurger.devoured
            },
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    },
    updateOne: function (burgerId, callback) {
        connection.query('UPDATE burgers SET devoured=true WHERE id=?', burgerId, function (err, res) {
            if (err) throw err;
            console.log(burgerId + " devoured: true");
            callback(res);
        });
    }
};

module.exports = orm;