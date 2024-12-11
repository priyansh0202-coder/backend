const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://priyanshsoni36:priyanshsoni36@cluster0.ap0pqmn.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = mongoose;
