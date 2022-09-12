const express = require('express');
const aboutController = require('../controller/about');

const router = express.Router();

router.get('/fetch', aboutController.fetch);
router.post('/update', aboutController.update);

module.exports = router;