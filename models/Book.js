const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    cover: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);