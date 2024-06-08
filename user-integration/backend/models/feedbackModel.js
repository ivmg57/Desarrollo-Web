const { db } = require('../config/db');

const getFeedbackByUserId = async (userId) => {
    try {
        const query = 'SELECT * FROM feedback WHERE user_id = $1;';
        const { rows } = await db.query(query, [userId]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const createFeedback = async (feedback, userId) => {
    try {
        const query = 'INSERT INTO feedback (feedback, user_id) VALUES ($1, $2) RETURNING *;';
        const { rows } = await db.query(query, [feedback, userId]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const updateFeedback = async (id, feedback, user_id) => {
    try {
        const query = 'UPDATE feedback SET feedback = $1, user_id = $2 WHERE id = $3 RETURNING *;';
        const { rows } = await db.query(query, [feedback, user_id, id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteFeedback = async (id) => {
    try {
        const query = 'DELETE FROM feedback WHERE id = $1;';
        await db.query(query, [id]);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getFeedbackByUserId, createFeedback, updateFeedback, deleteFeedback };
