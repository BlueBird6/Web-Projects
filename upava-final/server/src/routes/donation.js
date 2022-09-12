const express = require('express');
const donationController = require('../controller/donation');

const router = express.Router();

router.post('/pay', donationController.donate);
router.get('/fetchall', donationController.fetchAll);

module.exports = router;