const express = require('express');
const routes = express.Router();

const AuthRoutes = require('./api/auth.route');
const UserRoutes = require('./api/user.route');

routes.use('/auth', AuthRoutes);
routes.use('/user', UserRoutes);


module.exports = routes;
