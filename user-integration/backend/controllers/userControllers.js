const userModel = require('../models/userModel');

async function getAllUsers(req, res) {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getUserById(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await userModel.getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createUser(req, res) {
    const user = req.body;
    console.log(user);
    try {
        const newUser = await userModel.createUser(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateUser(req, res) {
    const { id } = req.params;
    const user = req.body;
    console.log(user);
    try {
        const updatedUser = await userModel.updateUser(id, user);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await userModel.deleteUser(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
