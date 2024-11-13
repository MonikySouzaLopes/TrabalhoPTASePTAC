const prisma = require("./prisma/prismaClient");

const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000"
}));

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);



app.listen(8000);
