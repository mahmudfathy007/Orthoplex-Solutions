const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/models/user.model');

const Signup = async (req, res) => {
    try {
        const { username, name, email, password } = req.body;

        // Check if all data is entered 
        if (!username || !name || !email || !password) {
            return res.status(400).send({ message: "Please enter all fields" });
        }

        // Check if user already exists
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).send({ message: "User already exists" });
        }

        // Check if username already exists
        const usernameExists = await User.findOne({ where: { username } });
        if (usernameExists) {
            return res.status(400).send({ message: "Username already exists" });
        }

        // Hash the user password for security
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const user = new User({
            name,
            email,
            username,
            password: hashedPassword
        });

        // Save user to the database
        await user.save();
        res.json({ message: "Registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};

module.exports = {
    Signup
};
