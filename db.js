const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://priyanshsoni36:cbYAjR6rzI8Xdei1@cluster0.vwsxq.mongodb.net/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = mongoose;
