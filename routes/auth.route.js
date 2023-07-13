const express = require("express");
const authorize = require("../middleware/auth.middleware");
const router = express.Router();
const { register, login, is_verify } = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/is_verify", authorize, is_verify);

module.exports = router;
