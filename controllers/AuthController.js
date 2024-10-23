const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

<<<<<<< HEAD

class AuthController{
    static async cadastro(req, res){}

    static async login(req, res){}

    static async loginForm(req, res){
        res.send("<form action='/auth/login'><input type='email' name='email'><input type='submit value='Entrar'></form>"

        );
=======
class AuthController{
    static async cadastro(){
        
    }
    static async login(){

>>>>>>> 957502786901528976727e1936d391cf21a853bd
    }
}

module.exports = AuthController;