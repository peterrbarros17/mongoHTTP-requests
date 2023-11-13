import express from 'express'
import conectaAoDb from './config/dbConect.js'
import routes from './routes/index.js'

const conexao = await conectaAoDb()

conexao.on("erro", (erro) =>{
    console.log("Erro na conexão ao DB", erro);
})

conexao.once("open", () =>{
    console.log("Conexão com DB, Ok!");
})

const app = express()

routes(app)

export default app