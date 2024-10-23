const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


class AuthController{
    static async cadastro(req, res){}

    static async login(req, res){}

    static async loginForm(req, res){
        res.send("<form action='/auth/login'><input type='email' name='email'><input type='submit value='Entrar'></form>"

        );
    }
}

module.exports = AuthController;