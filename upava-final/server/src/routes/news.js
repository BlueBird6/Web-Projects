const express = require('express');
const newsController = require('../controller/news');

const router = express.Router();

router.post('/create', newsController.createNews);
router.post('/update', newsController.update);
router.post('/delete', newsController.delete);
router.get('/fetch', newsController.fetch);
router.get('/fetchTitle', newsController.fetchTitle);

module.exports = router;