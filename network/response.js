module.exports = {
    success: (req, res, next, status, data, log=null) => {
        res.status(status || 200);
        res.send(data);
        log === null ? "" : console.log(log);
    },
    failed: (req, res, next, status, message, log=null) => {
        res.status(status || 404);
        res.send({ error: message });
        log === null ? "" : console.log(log);
    }
}