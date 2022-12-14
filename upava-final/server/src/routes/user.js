const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.get('/fetchAll', userController.fetchAll);

module.exports = router;