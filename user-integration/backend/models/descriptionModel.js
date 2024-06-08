const { db } = require('../config/db');

const getDescriptionByUserId = async (userId) => {
    try {
        const query = 'SELECT * FROM description WHERE user_id = $1;';
        const { rows } = await db.query(query, [userId]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const createDescription = async (description, prescription, userId) => {
    try {
        const query = 'INSERT INTO description (description, prescription, user_id) VALUES ($1, $2, $3) RETURNING *;';
        const { rows } = await db.query(query, [description, prescription, userId]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const updateDescription = async (id, description, prescription, user_id) => {
    try {
        const query = 'UPDATE description SET description = $1, prescription = $2, user_id = $3 WHERE id = $4 RETURNING *;';
        const { rows } = await db.query(query, [description, prescription, user_id, id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteDescription = async (id) => {
    try {
        const query = 'DELETE FROM description WHERE id = $1;';
        await db.query(query, [id]);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getDescriptionByUserId, createDescription, updateDescription, deleteDescription };
