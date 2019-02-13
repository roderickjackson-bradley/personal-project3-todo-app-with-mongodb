// app.js
const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');

// Port
const port = 4600;

// init
const app = express();

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/todoapp';

require('./config/database');

// Body Parser Middleware
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to mongodb


app.get('/', (req, res, next) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Server running on port` +port);
});
