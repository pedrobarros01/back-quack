/**
 * Importação dos módulos necessários para fazer o back-end funcionar:
 * express -> ponto de controle das rotas do back-end
 * cors -> lista de permissões de quem pode ou não se comunicar o back 
 */
const express = require('express');
const cors = require('cors');


// Instanciação do objeto express/ Inicialização do express no código
const app = express();

//Criação do "server"/ porta que ficará ouvindo as requisições que chegam para o back-end
//é nela tambem que o back enviará as respostas pedidas
app.listen(8800, () => console.log("Rodando no 8800 quack!"));

//Utilização do cors como uma lista de acesso, aqui esta permitindo a qualquer um a se comunicar 
app.use(cors());

//Alteração do formato de daods que chegam e saem do back-end, utilizamos o formato JSON
app.use(express.json());

//Variavel que será utilizada para contar os alunos cadastrados, funcionando assim como um ID(identificador unico)
let id = 0;

//Criação do armazenamento dos dados do back-end, criamos uma lista em vez de um banco pois o próprio é demorado para configurar
const quackAlunos = [

];

//Criação da rota GET do back-end, contem a função de pegar todos os alunos cadastrados e enviar como dados de saída
//essa função contem 2 parametros:
// 1 - Nome da rota(/quack)
// 2 - Uma função(callback) que será onde toda a funcionalidade da rota será efetuada
app.get('/quack', (req, res) => {
    //printa a lista
    console.log(quackAlunos)
    //retorna um response  com a lista de alunos com um status code de 200(OK)
    return res.status(200).json(quackAlunos);
});

//Criação da rota POST do back-end, funciona como um cadastro de alunos, contem os mesmos parametros do GET
app.post('/quack', (req, res) => {
    // Obtem os dados de entrada com o objeto body da requisição
    //Desestrutura esse objeto em 4 variaveis: nome, av1, av2, av3
    const {nome, av1, av2, av3} = req.body;
    // soma  + 1 no ID, por que os dados estao prontos para ser cadastrados
    id = id + 1;
    // Cadastra/coloca os dados na lista quackAlunos
    quackAlunos.push({id, nome, av1, av2, av3});
    //Retorna um response com uma mensagem de Cadastro concluido com status code de 201(CREATED)
    return res.status(201).json({"messagem": "Cadastrado com sucesso"});
})



