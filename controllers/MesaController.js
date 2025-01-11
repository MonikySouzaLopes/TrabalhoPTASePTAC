const prisma = require("../prisma/prismaClient");

class MesaController {
    static async cadastro(req, res) {
        const { codigo, n_lugares } = req.body;

        
        if (!codigo || codigo.length < 3) {
            return res.status(422).json({
                erro: true,
                mensagem: "O código da mesa deve ter pelo menos 3 caracteres.",
            });
        }

        if (!n_lugares || isNaN(n_lugares) || n_lugares <= 0) {
            return res.status(422).json({
                erro: true,
                mensagem: "O número de lugares deve ser um número maior que zero.",
            });
        }

        
        const existeMesa = await prisma.mesa.count({
            where: {
                codigo: codigo,
            },
        });

        if (existeMesa !== 0) {
            return res.status(422).json({
                erro: true,
                mensagem: "Já existe uma mesa cadastrada com este código.",
            });
        }

        try {
            
            const novaMesa = await prisma.mesa.create({
                data: {
                    codigo: codigo,
                    n_lugares: parseInt(n_lugares),
                },
            });

            return res.status(201).json({
                erro: false,
                mensagem: "Mesa cadastrada com sucesso!",
                mesa: novaMesa,
            });
        } catch (error) {
            return res.status(500).json({
                erro: true,
                mensagem: "Erro ao cadastrar a mesa. Tente novamente mais tarde.",
                detalhe: error.message,
            });
        }
    }
}

module.exports = MesaController;
