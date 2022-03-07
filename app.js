const express = require("express");
const app = express();

app.use(allbooks);

app.get("/books", (req, res) => {
    return res.send({ route: "/books" });
});

function allbooks(req, res, next) {
    if(req.path="/books"){
    console.log("Fetching all books");
    }
    next();
}

app.use(singlebook);

app.get("/book/name", (req, res) => {
    return res.json({ route: `/book/name`, bookName: req.name });
})


function singlebook(req, res, next) {
    if(req.path=="/book/name"){
    req.name="game of thrones";
    console.log(req.name);
    }
    next();
}

app.listen("4500", () => {
    console.log("Listening on Port 4500");
})