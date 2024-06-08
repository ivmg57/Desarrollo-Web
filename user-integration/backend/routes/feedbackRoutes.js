const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackControllers');

router.get('/:userId', feedbackController.getFeedbackByUserId);
router.post('/:userId', feedbackController.createFeedback);
router.put('/:id', feedbackController.updateFeedback);
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
