const router = require("express").Router();

const AuthController = require("../controllers/AuthController")

router.post("/cadastro", (req, res) => {AuthController.cadastro});
router.post("/login", (req, res) => {AuthController.login});

//Responde a qualquer requisição encaminhada para 
// /auth/algumaCoisa
const authRoutes = require("./routes/authRoutes");
app.use("./auth", authRoutes);

module.exports = router;