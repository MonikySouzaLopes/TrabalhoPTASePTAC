const prisma = require("../prisma/prismaClient");

class ReservaController {
    static async registrarReserva(req, res) {
        const { mesaId, n_pessoas } = req.body;
        const data = new Date(req.body.data);

        try {
            // Verificar se a data da reserva é >= hoje
            if (data < new Date()) {
                return res.status(400).json({
                    erro: true,
                    mensagem: "A data da reserva não pode ser anterior à data atual.",
                });
            }

            //Verificar se a mesa existe e se ela está disponível
            const mesa = await prisma.mesa.findUnique({
                where: { id: parseInt(mesaId) }, // Converter mesaId para inteiro
                include: {
                    reservas: {
                        where: {
                            data: data,
                            status: true,
                        },
                    },
                },
            });

            if (!mesa) {
                return res.status(404).json({
                    erro: true,
                    mensagem: "Mesa não encontrada. Verifique o ID fornecido.",
                });
            }

            // Verificar se a mesa consegue comportar o número de pessoas indicado
            if (mesa.n_lugares < n_pessoas) {
                return res.status(400).json({
                    erro: true,
                    mensagem: "A mesa não tem lugares suficientes para o número de pessoas.",
                });
            }

            //Verificar se a mesa está livre para a data selecionada
            if (mesa.reservas && mesa.reservas.length > 0) {
                return res.status(400).json({
                    erro: true,
                    mensagem: "A mesa selecionada já está reservada para esta data.",
                });
            }

            //Criar a reserva
            await prisma.reserva.create({
                data: {
                    data: data,
                    n_pessoas: n_pessoas,
                    usuario: {
                        connect: { id: req.usuarioId }, 
                    },
                    mesa: {
                        connect: { id: parseInt(mesaId) }, 
                    },
                },
            });

            return res.status(201).json({
                erro: false,
                mensagem: "Reserva realizada com sucesso.",
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                erro: true,
                mensagem: "Ocorreu um erro ao cadastrar a reserva.",
                detalhe: err.message,
            });
        }
    }
}

module.exports = ReservaController;
