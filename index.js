const express = require('express');
//database
const Database = require('./database');
//initialization
const OurApp = express();

// Route        - /book
// Description  - to get all books
// Access       - Public
// Method       - GET
// Params       - none
// Body         - none
OurApp.get('/book', (req, res) => {
    return res.json({books: Database.Book});
});

// Route        - /book/:bookID
// Description  - to get a book based on ISBN
// Access       - Public
// Method       - GET
// Params       - bookID
// Body         - none
OurApp.get('/book/:bookID', (req, res) => {
    const getBook = Database.Book.filter(
        (book) => book.ISBN === req.params.bookID);
        
    return res.json({book: getBook});
});

// Route        - /book/:c/:category
// Description  - to get a list of books based on category
// Access       - Public
// Method       - GET
// Params       - category
// Body         - none
OurApp.get('/book/c/:category', (req, res) => {
    const getBook = Database.Book.filter(
        (book) => book.category.includes(req.params.category)
    );

    return res.json({book: getBook});
});

OurApp.listen(1001, () => console.log("Server is Running!!"));