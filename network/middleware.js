const jwt = require("jsonwebtoken");
// modules
const response = require("./response");

module.exports = (req, res, next) => {
    let token = req.header("auth-token");
    if (!token) return response.failed(req, res, next, 401, "Access denied!");
    try {
        let verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verified;
        next();
    } catch (err) {
        response.failed(req, res, next, 400, "Invalid token");
    }
}