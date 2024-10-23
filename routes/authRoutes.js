
const express = require("express");
const router = express.Router();


const AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.loginForm);

router.post("/login", AuthController.login);
router.post("/cadastro", AuthController.cadastro);

module.exports = router;




