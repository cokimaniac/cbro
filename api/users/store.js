const User = require("./model");

const createUser = async (data) => {
    let user = await new User({
        userName: data.userName,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
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