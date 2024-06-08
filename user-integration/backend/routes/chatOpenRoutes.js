const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const ragController = require('../controllers/ragController');

router.post('/', chatController.getResponseChat);
router.post('/context', ragController.getContextResponse);

module.exports = router;
