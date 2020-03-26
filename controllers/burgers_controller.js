const express = require("express");
const burger = require("../models/burger");

const app = express()
const router = express.Router()

router.get("/", function(req, res) {
  burger.getBurgers(function(data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.addBurger(req.body.burgerName, function(data) {
    res.json(data.affectedRows + " burger added, per order: " + JSON.stringify(req.body));
    res.status(200).end;
  });    
});

router.put("/api/burgers/:burger_id", function(req, res) {
  burger.devourBurger(req.params.burger_id, function(data) {
    res.send(`Devoured burger of ID ${req.params.burger_id}!`);
  });
});

module.exports = router;
