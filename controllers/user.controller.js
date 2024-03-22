const express = require('express');
const User = require('../database/models/user.model');


const getAllUsers = async (req, res) => {
    const { page = 1, limit = 10 } = req.params;
    const offset = (page - 1) * limit;
    
    try {
        const { count, rows } = await User.findAndCountAll({
            attributes: { exclude: ['password'] },
            offset,
            limit: parseInt(limit)
        });

        const totalPages = Math.ceil(count / limit);
        
        res.json({
            users: rows,
            currentPage: parseInt(page),
            totalPages
        });
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

const updateUserDetails = async(req, res) => {
    try {
        const { userId } = req.params;
        const { name, email } = req.body;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Update fields if provided
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};

const deleteUser = async(req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        await user.destroy();
        res.status(200).send({ message: "User deleted successfully" });
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};




module.exports = {
    getAllUsers,
    getUserById,
    updateUserDetails,
    deleteUser
};
