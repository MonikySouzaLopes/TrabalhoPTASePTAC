const prisma = require("./prisma/prismaClient");
const express = require("express");
const cors = require("cors");

const AuthController = require("./controllers/AuthController")

const app = express();
app.use(express.json());
app.use(cors());

// Rotas de autenticação
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Rotas de perfil
const profileRoutes = require("./routes/profileRoutes"); 
app.use("/perfil", AuthController.verificaAutenticacao, profileRoutes); 

// Inicialização do servidor
app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});
