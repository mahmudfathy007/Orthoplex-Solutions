const express = require('express');
const UserController = require('../../controllers/user.controller');

const UserRoutes = express.Router();

UserRoutes.get('/getAllUsers' , UserController.getAllUsers)

UserRoutes.get('/getUserById/:userId' , UserController.getUserById)

UserRoutes.get('/updateUserDetails/:userId' , UserController.updateUserDetails)

module.exports = UserRoutes;

