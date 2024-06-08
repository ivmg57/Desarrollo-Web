const express = require('express');
const router = express.Router();
const descriptionController = require('../controllers/descriptionControllers');

router.get('/:userId', descriptionController.getDescriptionByUserId);
router.post('/:userId', descriptionController.createDescription);
router.put('/:id', descriptionController.updateDescription);
router.delete('/:id', descriptionController.deleteDescription);

module.exports = router;
