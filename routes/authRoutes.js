<<<<<<< HEAD
const express = require("express");
const router = express.Router();


const AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.loginForm);

router.post("/login", AuthController.login);
router.post("/cadastro", AuthController.cadastro);

module.exports = router;

=======
const router = require("express").Router();

const AuthController = require("../controllers/AuthController")

router.post("/cadastro", (req, res) => {AuthController.cadastro});
router.post("/login", (req, res) => {AuthController.login});

//Responde a qualquer requisição encaminhada para 
// /auth/algumaCoisa
const authRoutes = require("./routes/authRoutes");
app.use("./auth", authRoutes);

module.exports = router;
>>>>>>> 957502786901528976727e1936d391cf21a853bd
