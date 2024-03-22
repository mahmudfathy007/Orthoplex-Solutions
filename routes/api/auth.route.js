const express = require('express');
const AuthController = require('../../controllers/auth.controller');

const AuthRoutes = express.Router();

AuthRoutes.post('/signup', AuthController.Signup);

AuthRoutes.post('/login', AuthController.Login);

module.exports = AuthRoutes;

