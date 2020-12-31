require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// modules
const User = require("./model");

const createUser = async (data) => {
    let salt = await bcrypt.genSalt(10);
    let hashedPass = await bcrypt.hash(data.password, salt);
    let user = await new User({
        userName: data.userName,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: hashedPass
    });
    user.save();
    return user;
}

const listUsers = async () => {
    let users = await User.find({});
    return users;
}

const getUser = async (userID) => {
    let user = await User.find({ _id: userID });
    return user;
}

const deleteUser = async (userID) => {
    let user = await User.findByIdAndDelete(userID);
    return {message: "Deleted user!"}
}

const authenticateUser = async (data) => {
    let user = await User.findOne({ email: data.email});
    if (!user) {
        throw Error({ message: "Invalid password" });
    }
    let passValidation = await bcrypt.compare(data.password, user.password);
    if (!passValidation) {
        throw Error({ message: "No user is registered with this email" });
    }
    let token = jwt.sign({ _id: user.id }, process.env.SECRET_TOKEN);
    return { token: token };
}

const userProfile = async (userData) => {
    let user = await User.findOne({ _id: userData._id });
    return user;
}

module.exports = {
    createUser, listUsers, getUser, deleteUser, authenticateUser, userProfile
}