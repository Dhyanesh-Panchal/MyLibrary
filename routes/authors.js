const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render("authors/index");
    })


router.route('/new')
    .get((req, res) => {
        res.render("authors/new")
    })
    .post((req, res) => {
        res.json({
            action: "newUser creation"
        })
    })

module.exports = router

