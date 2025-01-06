const express = require("express");
const router = express.Router();


const ProfileController = require("../controllers/ProfileController");

router.get("/", ProfileController.getPerfil);
router.patch("/", ProfileController.atualizaPerfil);



module.exports = router;
