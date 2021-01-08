const mongoose = require("mongoose");

const { Schema } = mongoose;

let userSchema = new Schema({
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
    },
    password: {
        type: String,
        required: true
    },
    debtors: [{
        type: Schema.Types.ObjectId,
        ref: "Debtor"
    }]
});

module.exports = mongoose.model("User", userSchema);