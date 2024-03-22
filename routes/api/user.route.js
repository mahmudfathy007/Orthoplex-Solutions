const express = require('express');
const UserController = require('../../controllers/user.controller');

const UserRoutes = express.Router();

UserRoutes.get('/getAllUsers' , UserController.getAllUsers)

UserRoutes.get('/getUserById/:userId' , UserController.getUserById)

module.exports = UserRoutes;

