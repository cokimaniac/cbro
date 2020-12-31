const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);