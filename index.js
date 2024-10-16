const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const app = express();


app.listen(8000);