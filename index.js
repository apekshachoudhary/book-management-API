const express = require('express');
//databade
const Database = require('./database');
//initialization
const OurApp = express();

OurApp.get('/book', (req, res) => {
    return res.json({books: Database.Book});
});

OurApp.listen(1000, () => console.log("Server is Running!!"));