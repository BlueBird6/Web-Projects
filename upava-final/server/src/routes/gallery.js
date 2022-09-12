const express = require('express');
const galleryController = require('../controller/gallery');

const router = express.Router();

router.post('/add', galleryController.add);
router.post('/delete', galleryController.delete);
router.get('/fetch', galleryController.fetch);

module.exports = router;