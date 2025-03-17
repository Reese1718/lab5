const express = require('express');
const { request } = require('http');
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is listening on port: ", PORT);
});

let books = 
[
    {
        "id": "1",
        "title": "1984",
        "details": 
        [
            {
                "id": "1",
                "author": "George Orwell",
                "genre": "Dystopian",
                "publicationYear": 1949
            } 
        ]
    }
];

app.get('/whoami', (req, res) => {
    let student_no = {"Student number" : "2657853"};
    response.send(student_no);

});



app.get('/books', (req, res) => {
    response.status(200).send(books);
});

app.get(' /books/:id', (req, res) => {
    const bookid = request.params.id;
    const book = books.find(b=> b.id === bookid)
    if (book)
    {
        response.json(book.details);
    }
    else
    {
        response.status(404).json({"error": "Not Found"});
    }

});

app.post('/books', (req, res) => {
    const { id, title, details } = request.body;
    if (!id || !title || !details)
    {
        return express.response.status(400).json({"error": "Missing required book values."});
    }
    const newbook = {id, title, details};
    books.push(newbook);
    response.json(newbook);

});

app.put('/books/:id', (req, res) => {
    const bookid = request.params.id;
    const book = books.find(b=> b.id === bookid)
    if (!book)
    {
        response.status(404).json({"error": "Book Not Found"});
    }
    else
    {
        const update = request.body;
        book.title = update.title;
        book.details = update.details;
        express.response.json(book);
    }
    

    book.title = title;
    book.details = details;
    response.json(book)
 
});

app.delete('/books/:id', (req, res) => {
    const bookid = request.params.id;
    const book = books.find(b=> b.id === bookid)
    if (book)
    {
        books = books.filter(b=> b.id != bookid);
        response.json({"message":"Successfully deleted"});
    }
    else
    {
        response.status(404).json({"error": "Book Not Found"});
    }

});


app.post(' 	/books/:id/details', (req, res) => {
    const bookid = request.params.id;
    const book = books.find(b=> b.id === bookid)
    if (book)
    {
        const details = request.body;
        book.details.push(details);
    }
    else
    {
        response.status(404).json({"error": "Book Not Found"});
    }

});

app.delete('/books/:id/details/:detailId', (req, res) => {
    const bookid = request.params.id;
    const bookdetails = request.params.detailId;

    const book = books.find(b=> b.id === bookid)
    if (book)
    {
        books.details = books.details.filter(b=> b.id != bookdetails);
        response.json({"message":"Successfully deleted"});
    }
    else
    {
        response.status(404).json({"error": "Book Not Found"});
    }

});



