const express = require("express");
const router = express.Router();


const ProfileController = require("../controllers/ProfileController");

router.post("/perfil", AuthController.getPerfil);
router.post("/atualizaPerfil", AuthController.atualizaPerfil);

module.exports = router;
