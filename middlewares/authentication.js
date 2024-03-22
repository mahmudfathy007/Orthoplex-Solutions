require('dotenv').config();
const jwt = require("jsonwebtoken");
const Jwt_secret = process.env.JWT_SECRET;
const User = require('../database/models/user.model');

const authentication = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must have logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, Jwt_secret, async (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must have logged in" });
        }
        const { id } = payload;
        const userData = await User.findByPk(id);

        req.user = userData;
        next();
    });
};

module.exports = {
    authentication
};