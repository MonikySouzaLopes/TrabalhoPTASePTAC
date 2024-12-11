const prisma = require("./prisma/prismaClient");

const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const AuthController = require('./controllers/AuthController');
app.use("/auth", authRoutes);

const ProfileController = require("./routes/profileRoutes");
app.use("/perfil", profileRoutes);


app.listen(8000);
