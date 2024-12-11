
const cors = require("cors");
const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("./db");
const Book = require("./models/Book");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello, this is the backend");
});

// Get all books
app.get("/book", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error("Error fetching books:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Add a new book
app.post("/book", upload.single("cover"), async (req, res) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            cover: req.file.filename,
        });

        await newBook.save();
        res.json("Book has been created successfully");
    } catch (err) {
        console.error("Error creating book:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(8000, () => {
    console.log("Connected to backend successfully");
});
