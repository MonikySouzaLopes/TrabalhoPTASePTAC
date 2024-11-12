const prisma = require("./prisma/prismaClient");

const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);



app.listen(3000);
