const express = require("express");
const router = express.Router();


const MesaController = require("../controllers/MesaController");
const AuthController = require("../controllers/AuthController")

router.post("/novo", 
    AuthController.verificaAutenticacao, 
    AuthController.verificaPermissaoAdm, 
    MesaController.novaMesa);

router.get("/", MesaController.buscarMesas);

router.get("/disponibilidade", MesaController.mesasDisp);

router.put('/', AuthController.verificaAutenticacao, AuthController.verificaPermissaoAdm, MesaController.atualizarMesa)


module.exports = router;
