const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("jay shree krishna!  WORking")
})
router.get('/hello', (req, res) => {
    res.send("inside route Hello")
})

module.exports = router;