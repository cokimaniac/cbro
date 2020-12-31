const User = require("./model");
const bcrypt = require("bcryptjs");

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

module.exports = {
    createUser, listUsers, getUser, deleteUser
}