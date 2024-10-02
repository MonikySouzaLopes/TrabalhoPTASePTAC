const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function main(){
    //Insere um usuário
    const novoUsuario = await prisma.usuario.create({
        data:{
            nome: "Moniky Lopes",
            email: "moniky.lopes@estudante.ifms.edu.br"
        }   
    });

    console.log("Novo usuário: " + JSON.stringify(novoUsuario));

    //Busca usuários
    const usuarios = await prisma.usuario.findMany();

    console.log("Todos os usuários: " + JSON.stringify(usuarios));

}

main().catch((erro) => {
    console.log("Erro:" + erro);
})
    

