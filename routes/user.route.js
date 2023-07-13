const express = require("express");
const { fetchUserDetails } = require("../controllers/usercontroller");
const router = express.Router();

router.post("/get-user", fetchUserDetails);

module.exports = router;
