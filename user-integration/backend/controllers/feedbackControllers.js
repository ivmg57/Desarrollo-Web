const feedbackModel = require("../models/feedbackModel");

async function getFeedbackByUserId(req, res) {
    const { userId } = req.params;
    try {
        const feedback = await feedbackModel.getFeedbackByUserId(userId);
        res.status(200).json(feedback);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function createFeedback(req, res) {
    try {
        const { userId } = req.params;
        const { feedback } = req.body;
        const newFeedback = await feedbackModel.createFeedback(feedback, userId);
        res.status(201).json(newFeedback);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function updateFeedback(req, res) {
    const { id } = req.params;
    const { feedback, user_id } = req.body;
    try {
        const updatedFeedback = await feedbackModel.updateFeedback(id, feedback, user_id);
        res.status(200).json(updatedFeedback);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function deleteFeedback(req, res) {
    const { id } = req.params;
    try {
        await feedbackModel.deleteFeedback(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { getFeedbackByUserId, createFeedback, updateFeedback, deleteFeedback };
