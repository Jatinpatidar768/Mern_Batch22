const express = require("express");
const router = express.Router();
const Signup = require("../controllers/SignupController.js");
const VerifyAccount = require("../controllers/VerifyAccountController.js");
const Login = require("../controllers/LoginController.js");
const sendOTP = require("../controllers/SendOtpForPasswordChange.js");
const ResetPassword =require("../controllers/ResetPasswordController.js")
router.post("/register", Signup);
router.put("/verify-account", VerifyAccount);
router.post("/login", Login);
router.post("/send-otp", sendOTP);
router.post("/change-password", ResetPassword);
module.exports = router;