const store = require("./store");
// handle responses and status
const response = require("../../network/response");

const getUsers = async (req, res, next) => {
    let users = await store.listUsers();
    response.success(req, res, next, 200, users);
}

const createUser = async (req, res, next) => {
    try {
        let user = await store.createUser(req.body);
        response.success(req, res, next, 201, user, `Created user -> id: ${user._id}`);
    } catch (err) {
        response.failed(req, res, next, 500, "Could not create the user", "[error] Creating user failed.");
    }
}

const getUser = async (req, res, next) => {
    try {
        let user = await store.getUser(req.params.userID);
        return user.length === 0 ? response.failed(req, res, next, 404, "No user found") : response.success(req, res, next, 200, user);
    } catch (err) {
        response.failed(req, res, next, 404, "No user found");
    }
}

const removeUser = async (req, res, next) => {
    try {
        let user = await store.deleteUser(req.params.userID);
        response.success(req, res, next, 201, user, "User deleted", "[delete] User deleted");
    } catch (err) {
        response.failed(req, res, next, 404, "No user found.");
    }
}

module.exports = {
    list: getUsers,
    create: createUser,
    retrieve: getUser,
    delete: removeUser,
}