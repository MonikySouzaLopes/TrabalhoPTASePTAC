const express = require("express");
const router = express.Router();


const ProfileController = require("../controllers/ProfileController");

router.post("/perfil", ProfileController.getPerfil);
router.post("/atualizaPerfil", ProfileController.atualizaPerfil);

module.exports = router;
