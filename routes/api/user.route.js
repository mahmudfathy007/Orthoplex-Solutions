const express = require('express');
const UserController = require('../../controllers/user.controller');

const UserRoutes = express.Router();

UserRoutes.get('/getAllUsers' , UserController.getAllUsers)

module.exports = UserRoutes;

