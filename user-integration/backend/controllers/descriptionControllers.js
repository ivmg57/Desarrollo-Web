const descriptionModel = require("../models/descriptionModel");

async function getDescriptionByUserId(req, res) {
    const { userId } = req.params;
    try {
        const descriptions = await descriptionModel.getDescriptionByUserId(userId);
        res.status(200).json(descriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function createDescription(req, res) {
    try {
        const { userId } = req.params;
        const { description, prescription } = req.body;
        const newDescription = await descriptionModel.createDescription(description, prescription, userId);
        res.status(201).json(newDescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function updateDescription(req, res) {
    const { id } = req.params;
    const { description, prescription, user_id } = req.body;
    try {
        const updatedDescription = await descriptionModel.updateDescription(id, description, prescription, user_id);
        res.status(200).json(updatedDescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function deleteDescription(req, res) {
    const { id } = req.params;
    try {
        await descriptionModel.deleteDescription(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { getDescriptionByUserId, createDescription, updateDescription, deleteDescription };
