const express = require("express")
const router = express.Router();
const userController = require("../controller/profileUser")


router.get("/", userController.getUserProfile);
module.exports = router;
