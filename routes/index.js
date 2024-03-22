const express = require('express');
const routes = express.Router();

const UserRoutes = require('./api/user.route');

routes.use('/user', UserRoutes);


module.exports = routes;
