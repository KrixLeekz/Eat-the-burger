const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", (req, res) => {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], () => {
        res.redirect("/");
    });
});

router.put("/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, (data) => {
        res.redirect("/");
    });
});

module.exports = router;