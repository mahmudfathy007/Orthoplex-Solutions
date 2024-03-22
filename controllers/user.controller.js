const express = require('express');
const User = require('../database/models/user.model');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            // Exclude passwords
            attributes: { exclude: ['password'] } 
        });
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId, {
            // Exclude password
            attributes: { exclude: ['password'] }
        });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};


module.exports = {
    getAllUsers,
    getUserById
};
