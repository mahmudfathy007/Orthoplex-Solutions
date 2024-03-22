const express = require('express');
const AuthController = require('../../controllers/auth.controller');

const AuthRoutes = express.Router();

AuthRoutes.post('/signup', AuthController.Signup);



module.exports = AuthRoutes;

