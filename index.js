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

// Rotas de mesa
const mesaRoutes = require("./routes/mesaRoutes"); 
app.use("/mesa", mesaRoutes); 

// Inicialização do servidor
app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});
