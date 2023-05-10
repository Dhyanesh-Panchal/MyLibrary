const express = require('express');
const router = express.Router();
const Author = require('../models/authors').Author;

router.route('/')
    .get((req, res) => {
        res.render("authors/index");
    })


router.route('/new')
    .get((req, res) => {
        res.render("authors/new")
    })
    .post((req, res) => {
        const newAuthor = new Author({
            name: req.body.name
        })
        newAuthor.save((err, doc) => {
            if (err) {
                res.render('authors/new', {
                    author: newAuthor,
                    errorMessage: "Unable to create the author"
                })
            }
            else {
                res.redirect('/authors')
            }
        })
        res.json({
            action: "newUser creation",
            data: req.body
        })
    })

module.exports = router

