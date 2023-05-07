const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("index")
})
router.get('/hello', (req, res) => {
    res.send("inside route Hello")
})

module.exports = router;