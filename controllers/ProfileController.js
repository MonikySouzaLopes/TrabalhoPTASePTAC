const prisma = require("../prisma/prismaClient");

class ProfileController {
    static async getPerfil(req, res){
        res.send("Retorno do perfil do usuário");
    }

    static async atualizaPerfil(req, res){
        res.send("Perfil atualizado com sucesso");
    }
}

module.exports = ProfileController;