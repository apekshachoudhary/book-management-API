/*
---------- Requirements ----------
Book
    - ISBN              - String
    - Title             - String
    - Author            - [Number]
    - Language          - String
    - Publications      - Number
    - NumOfPages        - Number
    - Categories        - [String]
Author
    - id                - Number
    - name              - String
    - books             - [String]
Publication
    - id                - Number
    - name              - String
    - books             - [String]
---------- APIs ----------
Book
    # GET
        - to get all books(done)
        - to get specific books(done)
        - to get a list of books based on category(done)
        - to get a list of books based on author
    # POST
        - to add new book
    # PUT
        - to update book details
        - to update/add new author
    # DELETE
        - to delete a book
        - to delete an author from the book
Author
    # GET
        - to get all authors(done)  
        - to get specific authors(done)
        - to get list of author based on a book
    # POST
        - to add new author
        - to update/add new books
    # PUT
        - to update author details
    # DELETE
        - to delete an author
Publication
    # Get
        - to get all publications(done)
        - to get specific publication(done)
        - to get list of publication based on a book
    # POST
        - to add new publication
    # PUT
        - to update publication
        - to update/add new book
    # DELETE
        - to delete a book from publication
        - to delete a publication
*/