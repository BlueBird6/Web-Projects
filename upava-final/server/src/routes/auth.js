const express =  require('express');
const authcontroller = require('../controller/auth');

const router = express.Router();
router.post('/signup', authcontroller.signup);
router.post('/signin', authcontroller.SignIn);
router.post('/verify', authcontroller.verifyOTP);
router.post('/resendOTP', authcontroller.resendOTP);
router.post('/forgotpassword', authcontroller.forgotPassword);
router.post('/passwordchange', authcontroller.passwordChange);

module.exports = router;