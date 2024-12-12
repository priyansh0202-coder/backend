const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://priyanshsoni36:cbYAjR6rzI8Xdei1@cluster0.vwsxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = mongoose;
