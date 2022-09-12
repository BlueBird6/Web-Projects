const express = require('express');
const feedbackController = require('../controller/feedback');

const router = express.Router();

router.post('/contact-us', feedbackController.contact);
router.get('/fetchAll', feedbackController.fetchAll);

module.exports = router;