const orm = require("../config/orm");

const burger = {
    getBurgers : function(cb) {
        orm.selectAll()
            .then(res => {
                cb(res);
            })
            .catch(err => {
                if (err) {
                    console.log(err);
                }
            });
    },
    addBurger : function(burgerName, cb) {
        orm.insertOne(burgerName)
            .then(res => {
                console.log(`Inserted ${res.affectedRows} burger!`);
                cb(res);
            })
            .catch(err => {
                if (err) {
                    console.log(err);
                }
            });
    },
    devourBurger : function(burgerID, cb) {
        orm.updateOne(burgerID)
            .then(res => {
                console.log(`Devoured ${res.affectedRows} burger!`);
                cb(res);
            })
            .catch(err => {
                if (err) {
                    console.log(err);
                }
            });
    }
}

module.exports = burger;