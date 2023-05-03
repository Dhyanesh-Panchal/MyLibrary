const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const router = require('./routes/router');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err) => { console.error(err) });
db.once('open', () => { console.log("connected Database Succesfully") })

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');



app.use(expressLayouts);
app.use(express.static('public'))
app.use('/', router)



app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log('Error loading server:');
        console.error(err);
    }
    else {
        console.log(`server is listening on http://localhost:${process.env.PORT || 3000}`);
    }
})