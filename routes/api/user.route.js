const express = require('express');
const UserController = require('../../controllers/user.controller');
const { authentication } = require('../../middlewares/authentication');

const UserRoutes = express.Router();

UserRoutes.get('/getAllUsers/:page', authentication , UserController.getAllUsers)

UserRoutes.get('/getUserById/:userId', authentication, UserController.getUserById)

UserRoutes.put('/updateUserDetails/:userId', authentication, UserController.updateUserDetails)

UserRoutes.delete('/deleteUser/:userId', authentication, UserController.deleteUser)

module.exports = UserRoutes;

