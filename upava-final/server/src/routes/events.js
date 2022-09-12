const express = require('express');
const eventController = require('../controller/event');

const router = express.Router();

router.post('/create', eventController.createEvent);
router.post('/update', eventController.update);
router.post('/delete', eventController.delete);
router.get('/fetch', eventController.fetch);
router.get('/fetchTitle', eventController.fetchTitle);

module.exports = router;