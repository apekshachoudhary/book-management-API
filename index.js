const express = require('express');
//database
const Database = require('./database');
//initialization
const OurApp = express();

OurApp.use(express.json());



//---------- For BOOK ----------//
//------ GET Method ------//
// Route        - /book
// Description  - to get all books
// Access       - Public
// Method       - GET
// Params       - none
// Body         - none
OurApp.get('/book', (req, res) => {
    return res.json({ books: Database.Book });
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

    return res.json({ book: getBook });
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

    return res.json({ book: getBook });
});


//------ POST Method ------//
// Route        - /book/new
// Description  - to add new book
// Access       - Public
// Method       - POST
// Params       - none
// Body         - 
OurApp.post('/book/new', (req, res) => {
    console.log(req.body);
    res.json({ message: "Book added!! Successfully..." });
});

//------ PUT Method ------//
//------ DELETE Method ------//



//---------- For Author ----------//
//------ GET Method ------//
// Route        - /author
// Description  - to get all authors
// Access       - Public
// Method       - GET
// Params       - none
// Body         - none
OurApp.get('/author', (req, res) => {
    return res.json({ author: Database.Author });
});

// Route        - /author/:authorID
// Description  - to get specific authors
// Access       - Public
// Method       - GET
// Params       - authorID
// Body         - none
OurApp.get('/author/:authorname', (req, res) => {
    const getAuthor = Database.Author.filter(
        (author) => author.name === req.params.authorname);

    return res.json({ author: getAuthor });
});


//------ POST Method ------//
// Route        - /author/new
// Description  - to add new author
// Access       - Public
// Method       - POST
// Params       - none
// Body         - 
OurApp.post('/author/new', (req, res) => {
    const { newAuthor } = req.body;
    console.log(newAuthor);
    return res.json({ message: "Author added successfully!!" });
});

// Route        - /author/new
// Description  - to add new author
// Access       - Public
// Method       - POST
// Params       - none
// Body         - 

//------ PUT Method ------//
//------ DELETE Method ------//

//---------- For Publication ----------//
//------ GET Method ------//
// Route        - /publication
// Description  - to get all publications
// Access       - Public
// Method       - GET
// Params       - none
// Body         - none
OurApp.get('/publication', (req, res) => {
    return res.json({ publications: Database.Publication });
});

// Route        - /publication/:publicationname
// Description  - to get specific publication
// Access       - Public
// Method       - GET
// Params       - publicationname
// Body         - none
OurApp.get('/publication/:publicationname', (req, res) => {
    const getPublication = Database.Publication.filter(
        (publication) => publication.name === req.params.publicationname);

    return res.json({ publication: getPublication });
});



//------ POST Method ------//
OurApp.post('/publication/new', (req, res) => {
    const { newPublication } = req.body;
    console.log(newPublication);
    return res.json({ message: "Publication added successfully!!" });
});



//------ PUT Method ------//
//------ DELETE Method ------//

OurApp.listen(1001, () => console.log("Server is Running!!"));